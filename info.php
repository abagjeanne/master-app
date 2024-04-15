<!DOCTYPE html>
<html data-bs-theme="light" lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>GDS Group of Companies - Work From Home Website</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/Articles-Badges-images.css">
    <link rel="stylesheet" href="assets/css/Navbar-Right-Links-Dark-icons.css">
</head>

<body>

<script>
function fetchServerInfo() {
    // Fetch server hostname
    fetch('get_server_info.php?type=hostname')
        .then(response => response.text())
        .then(data => document.getElementById('hostname').innerText = data);

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

    <div>
        <nav class="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
            <div class="container"><a class="navbar-brand d-flex align-items-center" href="#" style="margin-left: 0px;"><span style="font-size: 22px;">GDS Group - Work From Home Site</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1" style="margin-left: 6px;margin-right: -17px;font-size: 14px;">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="index.php">Home</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="companies.php">Companies</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="links.php">Links</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link active" href="info.php">Information</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="about-us.php">About Us</a></li>
                    </ul><a class="btn btn-primary ms-md-2" role="button" href="contact-us.php" style="font-size: 18px;">Contact Us</a>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <div class="container py-4 py-xl-5">
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col">
                    <div class="p-4"><span class="badge rounded-pill bg-primary mb-2">Information</span><a href="#">
                            <h4>How to Link Shared Network Files via RaiDrive (Windows)</h4>
                        </a>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                            <div>
                                <p class="fw-bold mb-0">Prinze Joshua Valloso</p>
                                <p class="text-muted mb-0">04/01/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="p-4"><span class="badge rounded-pill bg-primary mb-2">Information</span><a href="#">
                            <h4>How to Link Shared Network Files via MacOS</h4>
                        </a>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
                            <div>
                                <p class="fw-bold mb-0">Prinze Joshua Valloso</p>
                                <p class="text-muted mb-0">04/01/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <footer class="text-center bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-6"><img src="assets/img/3.png" style="width: 250px;border-color: rgb(33, 37, 41);background: rgba(255,255,255,0.1);margin: 0px;margin-top: 20px;margin-bottom: 11px;" width="250" height="96">
                        <p style="color: rgb(255,255,255);">GDS Group of Companies</p>
                        <p style="margin-top: -12px;color: rgb(255,255,255);">Work From Home Website Resources</p>
                        <p style="margin-top: 36px;text-align: center;color: rgb(255,255,255);">Copyright&nbsp;© 2024 IT Department</p>
                        <p style="margin-top: -16px;text-align: center;font-size: 15px;color: rgb(255,255,255);">(Philippine Dragon Media Network Corporation)</p>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col" style="background: rgba(255,255,255,0);"><img src="assets/img/synology.png" style="border-color: rgb(33, 37, 41);background: rgba(255,255,255,0.1);margin-top: 20px;margin-bottom: 11px;width: 120px;height: 60px;" width="250" height="96">
                                <p style="color: rgb(255,255,255);"></p>
                                <p style="margin-top: -12px;color: rgb(255,255,255);">Current Server Status and Properties</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th style="width: 180.078px;background: rgba(255,255,255,0);color: rgb(255,255,255);">Title</th>
                                                <th style="background: rgba(255,255,255,0);color: rgb(255,255,255);">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);">Server Hostname</td>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);"><span id="hostname"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);">Server Public IP</td>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);"><span id="publicIP"></span></td>
                                            </tr>
                                            <tr>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);">Server Runtime</td>
                                                <td style="background: rgba(255,255,255,0);color: rgb(255,255,255);"><span id="runtime"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>