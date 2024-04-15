<?php
// Function to get server uptime
function getUptime() {
    $uptime = shell_exec('uptime');
    return $uptime;
}

// Function to get server public IP
function getPublicIP() {
    $publicIP = shell_exec('curl ifconfig.me');
    return $publicIP;
}

// Function to get server hostname
function getHostname() {
    $hostname = gethostname();
    return $hostname;
}

// Function to get server domain name
function getDomainName() {
    $domainName = shell_exec('hostname -d');
    return $domainName;
}

// Get server uptime
$uptime = getUptime();

// Get server public IP
$publicIP = getPublicIP();

// Get server hostname
$hostname = getHostname();

// Get server domain name
$domainName = getDomainName();

// Display server information
echo "<p><strong>Server Hostname:</strong> $hostname</p>";
echo "<p><strong>Server Domain Name:</strong> $domainName</p>";
echo "<p><strong>Server Public IP:</strong> $publicIP</p>";
echo "<p><strong>Server Runtime:</strong> $uptime</p>";
?>
