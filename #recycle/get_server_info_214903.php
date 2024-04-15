<?php
$type = $_GET['type'] ?? '';

switch ($type) {
    case 'hostname':
        echo gethostname();
        break;
    case 'domainName':
        $domainName = getSynologyDomainName();
        echo $domainName ? $domainName : 'N/A';
        break;
    case 'publicIP':
        echo shell_exec('curl ifconfig.me');
        break;
    case 'runtime':
        $uptime = shell_exec('cat /proc/uptime');
        $uptime = explode(" ", $uptime);
        $uptime = trim($uptime[0]);
        $days = floor($uptime / 86400);
        $hours = floor(($uptime / 3600) % 24);
        $minutes = floor(($uptime / 60) % 60);
        $seconds = $uptime % 60;
        echo "$days days, $hours hours, $minutes minutes, $seconds seconds";
        break;
    default:
        echo 'Invalid type';
        break;
}

function getSynologyDomainName() {
    $output = shell_exec('synology-dsm get | grep "Domain:"');
    if ($output) {
        $domainName = trim(str_replace("Domain:", "", $output));
        return $domainName;
    }
    return null;
}
?>
