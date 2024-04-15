function fetchData() {
    fetch('/api/synology-info') // Assuming the backend server exposes an API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('domainName').textContent = data.domainName;
            document.getElementById('serverName').textContent = data.serverName;
            document.getElementById('gatewayIP').textContent = data.gatewayIP;
            document.getElementById('uptime').textContent = formatUptime(data.uptime);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function formatUptime(uptime) {
    let days = Math.floor(uptime / (3600 * 24));
    let hours = Math.floor((uptime % (3600 * 24)) / 3600);
    let minutes = Math.floor((uptime % 3600) / 60);
    let seconds = Math.floor(uptime % 60);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

fetchData(); // Initial fetch
setInterval(fetchData, 1000); // Refresh every 1 second
