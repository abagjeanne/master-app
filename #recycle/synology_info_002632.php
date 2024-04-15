<?php
// Function to get system information from Synology device
function getSystemInfo() {
    // Get hostname
    $hostname = gethostname();

    // Get local gateway IP
    exec("/sbin/ip route | awk '/default/ { print $3 }'", $output);
    $gatewayIP = isset($output[0]) ? $output[0] : '';

    // Read Synology Directory Server configuration file to get Active Directory Domain Name
    $configFile = '/usr/syno/etc/synodsd.conf';
    $domainName = '';

    if (file_exists($configFile)) {
        $configLines = file($configFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($configLines as $line) {
            if (strpos($line, 'http://localhost:5000') === 0) {
                $ldapUrlParts = parse_url(trim($line));
                if (isset($ldapUrlParts['host'])) {
                    $domainName = $ldapUrlParts['host'];
                    break;
                }
            }
        }
    }

    // Calculate server uptime
    $uptime = exec("cut -d. -f1 /proc/uptime");
    $days = floor($uptime / (3600 * 24));
    $hours = floor(($uptime % (3600 * 24)) / 3600);
    $minutes = floor(($uptime % 3600) / 60);
    $seconds = $uptime % 60;
    $uptime = "$days days, $hours hours, $minutes minutes, $seconds seconds";

    return [
        'domainName' => $domainName,
        'serverName' => $hostname,
        'gatewayIP' => $gatewayIP,
        'uptime' => $uptime
    ];
}

// Fetch system information
$data = getSystemInfo();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
