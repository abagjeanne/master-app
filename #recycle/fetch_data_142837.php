<?php
// Function to fetch data from physical network
function getPhysicalNetworkInfo() {
    // Execute shell command to get network information
    $output = shell_exec("/sbin/ip route");
    $lines = explode("\n", trim($output));

    // Extract default gateway IP
    foreach ($lines as $line) {
        if (strpos($line, 'default via') !== false) {
            $parts = preg_split('/\s+/', $line);
            return $parts[2];
        }
    }
    return '';
}

// Function to fetch data from Synology device
function getSynologyInfo() {
    // Execute shell command to get Synology system information
    $output = shell_exec("/usr/syno/bin/synogetsysinfo");

    // Parse output to extract required information
    // Example parsing logic:
    // $data = json_decode($output, true);
    // return [
    //     'domainName' => $data['domainName'],
    //     'serverName' => $data['serverName'],
    //     'gatewayIP' => $data['gatewayIP'],
    //     'uptime' => $data['uptime']
    // ];

    return ['domainName' => '', 'serverName' => '', 'gatewayIP' => '', 'uptime' => ''];
}

// Function to fetch data via SNMP
function getSNMPInfo() {
    // SNMP community string and target device IP address
    $community = 'public';
    $ipAddress = '192.168.1.1'; // Replace with your device's IP address

    // SNMP OID values for the information you want to retrieve
    $oidDomainName = 'SNMPv2-MIB::sysName.0';
    $oidUptime = 'DISMAN-EVENT-MIB::sysUpTimeInstance';
    $oidGatewayIP = 'IP-MIB::ipRouteNextHop.0'; // Assuming this OID represents the default gateway IP

    // SNMP session
    $session = new SNMP(SNMP::VERSION_2C, $ipAddress, $community);

    // Fetching domain name
    $domainName = $session->get($oidDomainName);

    // Fetching system uptime
    $uptime = $session->get($oidUptime);

    // Fetching gateway IP
    $gatewayIP = $session->get($oidGatewayIP);

    // Close SNMP session
    $session->close();

    return [
        'domainName' => $domainName,
        'uptime' => $uptime,
        'gatewayIP' => $gatewayIP
    ];
}

// Function to combine and return all fetched data
function fetchData() {
    // Fetch data from physical network
    $physicalNetworkInfo = getPhysicalNetworkInfo();

    // Fetch data from Synology device
    $synologyInfo = getSynologyInfo();

    // Fetch data via SNMP
    $snmpInfo = getSNMPInfo();

    return [
        'physicalNetworkInfo' => $physicalNetworkInfo,
        'synologyInfo' => $synologyInfo,
        'snmpInfo' => $snmpInfo
    ];
}

// Fetch and return data as JSON
header('Content-Type: application/json');
echo json_encode(fetchData());
?>
