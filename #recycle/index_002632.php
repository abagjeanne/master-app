<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Synology Device Information</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <h1>Synology Device Information</h1>
    <p>Active Directory Domain Name: <span id="domainName"></span></p>
    <p>Server Name: <span id="serverName"></span></p>
    <p>Local Gateway IP: <span id="gatewayIP"></span></p>
    <p>Server Uptime: <span id="uptime"></span></p>

    <script>
        $(document).ready(function(){
            function fetchData() {
                $.getJSON('synology_info.php', function(data){
                    $('#domainName').text(data.domainName);
                    $('#serverName').text(data.serverName);
                    $('#gatewayIP').text(data.gatewayIP);
                    $('#uptime').text(data.uptime);
                });
            }
            setInterval(fetchData, 1000); // Refresh every 1 second
            fetchData(); // Initial fetch
        });
    </script>
</body>
</html>
