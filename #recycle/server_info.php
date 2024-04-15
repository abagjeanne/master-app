<?php
function get_synology_server_info() {
    // Synology DSM API endpoint to get system information
    $api_url = "http://pdmn.phil.com:5000/webapi/query.cgi";

    // Synology DSM API parameters to get system information
    $params = array(
        'api' => 'SYNO.Core.System',
        'version' => '1',
        'method' => 'info'
    );

    // Send request to Synology DSM API
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url . '?' . http_build_query($params));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Parse JSON response
    $data = json_decode($response, true);

    // Extract relevant server information
    $server_info = array(
        "Synology Directory Server Name" => isset($data['data']['hostname']) ? $data['data']['hostname'] : '',
        "Server Name" => php_uname('n'),
        "Gateway IP" => $_SERVER['SERVER_ADDR'],
        "Server Uptime" => shell_exec('cat /proc/uptime | awk \'{print int($1)}\'') // Uptime in seconds
    );

    return $server_info;
}

// Function to format uptime as hours, minutes, and seconds
function formatUptime($uptimeInSeconds) {
    $hours = floor($uptimeInSeconds / 3600);
    $minutes = floor(($uptimeInSeconds % 3600) / 60);
    $seconds = $uptimeInSeconds % 60;
    return sprintf("%02d:%02d:%02d", $hours, $minutes, $seconds);
}

// Set the header to specify JSON content
header('Content-Type: application/json');
echo json_encode(get_synology_server_info());
?>
