<?php
function getDomainName() {
    // PHP code to fetch Active Directory Domain Name
    return "PHIL.com";
}

function getServerName() {
    // PHP code to fetch Server Name
    return "Synology Server";
}

function getGatewayIP() {
    // PHP code to fetch Local Gateway IP
    return "192.168.1.1";
}

function getUptime() {
    // PHP code to fetch Server Uptime
    $uptimeInSeconds = 123456; // Example uptime in seconds

    $days = floor($uptimeInSeconds / (3600 * 24));
    $hours = floor(($uptimeInSeconds % (3600 * 24)) / 3600);
    $minutes = floor(($uptimeInSeconds % 3600) / 60);
    $seconds = $uptimeInSeconds % 60;

    return "$days days, $hours hours, $minutes minutes, $seconds seconds";
}

$data = [
    'domainName' => getDomainName(),
    'serverName' => getServerName(),
    'gatewayIP' => getGatewayIP(),
    'uptime' => getUptime()
];

header('Content-Type: application/json');
echo json_encode($data);
?>
