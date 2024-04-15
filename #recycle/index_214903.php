<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Synology Server Information</title>
</head>
<body>
<h1>Synology Server Information</h1>

<p><strong>Server Hostname:</strong> <span id="hostname"></span></p>
<p><strong>Server Domain Name:</strong> <span id="domainName"></span></p>
<p><strong>Server Public IP:</strong> <span id="publicIP"></span></p>
<p><strong>Server Runtime:</strong> <span id="runtime"></span></p>

<script>
function fetchServerInfo() {
    // Fetch server hostname
    fetch('get_server_info.php?type=hostname')
        .then(response => response.text())
        .then(data => document.getElementById('hostname').innerText = data);

    // Fetch server domain name
    fetch('get_server_info.php?type=domainName')
        .then(response => response.text())
        .then(data => document.getElementById('domainName').innerText = data);

    // Fetch server public IP
    fetch('get_server_info.php?type=publicIP')
        .then(response => response.text())
        .then(data => document.getElementById('publicIP').innerText = data);

    // Fetch server runtime
    fetch('get_server_info.php?type=runtime')
        .then(response => response.text())
        .then(data => document.getElementById('runtime').innerText = data);
}

// Call fetchServerInfo initially
fetchServerInfo();

// Refresh server info every 1 second
setInterval(fetchServerInfo, 1000);
</script>

</body>
</html>
