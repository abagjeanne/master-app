function fetchData() {
    fetch('synology_info.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('domainName').textContent = data.domainName;
            document.getElementById('serverName').textContent = data.serverName;
            document.getElementById('gatewayIP').textContent = data.gatewayIP;
            document.getElementById('uptime').textContent = data.uptime;
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchData(); // Initial fetch

setInterval(fetchData, 1000); // Refresh every 1 second
