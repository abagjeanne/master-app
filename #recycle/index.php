<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Synology Device Information</title>
</head>
<body>
    <h1>Synology Device Information</h1>
    <p>Active Directory Domain Name: <span id="domainName"><?php echo getDomainName(); ?></span></p>
    <p>Server Name: <span id="serverName"><?php echo getServerName(); ?></span></p>
    <p>Local Gateway IP: <span id="gatewayIP"><?php echo getGatewayIP(); ?></span></p>
    <p>Server Uptime: <span id="uptime"><?php echo getUptime(); ?></span></p>
</body>
</html>

<?php
function getDomainName() {
    // PHP code to fetch Active Directory Domain Name
    return "example.com";
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
?>
