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
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="info.php">Information</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="about-us.php">About Us</a></li>
                    </ul><a class="btn btn-primary ms-md-2" role="button" href="contact-us.php" style="font-size: 18px;">Contact Us</a>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <div class="container py-4 py-xl-5">
            <div class="row mb-5">
                <div class="col-md-8 col-xl-10 text-center mx-auto">
                    <h2 style="font-size: 27px;">Got Problems/Concerns?</h2>
                    <p class="w-lg-50" style="font-size: 15px;">Please contact our IT Team with their given contact numbers and/or Social Media QR Codes presented here.</p>
                </div>
            </div>
            <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div class="col">
                    <div class="text-center"><img class="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px"></div>
                    <p style="font-weight: bold;font-size: 20px;margin-bottom: 1px;text-align: center;">Jan Wilbert P. See</p>
                    <p style="text-align: center;">IT Head</p>
                    <p style="margin-bottom: 0px;text-align: center;"><strong>Contact Number/s:</strong></p>
                    <p style="text-align: center;">0917 541 9891 / 0995 251 1442</p>
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Telegram</td>
                                        <td class="text-center" style="font-weight: bold;">WeChat</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Messenger</td>
                                        <td class="text-center" style="font-weight: bold;">Viber</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center"><img class="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px"></div>
                    <p style="font-weight: bold;font-size: 20px;margin-bottom: 1px;text-align: center;">Prinze Joshua M. Valloso</p>
                    <p style="text-align: center;">IT Specialist</p>
                    <p style="margin-bottom: 0px;text-align: center;"><strong>Contact Number/s:</strong></p>
                    <p style="text-align: center;">0920 667 2004 / 0995 507 1063</p>
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Telegram</td>
                                        <td class="text-center" style="font-weight: bold;">WeChat</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Messenger</td>
                                        <td class="text-center" style="font-weight: bold;">Viber</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center"><img class="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px"></div>
                    <p style="font-weight: bold;font-size: 20px;margin-bottom: 1px;text-align: center;">Jeanne Mari S. Abag</p>
                    <p style="text-align: center;">IT Specialist - Intern</p>
                    <p style="margin-bottom: 0px;text-align: center;"><strong>Contact Number/s:</strong></p>
                    <p style="text-align: center;">0966 481 0660</p>
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Telegram</td>
                                        <td class="text-center" style="font-weight: bold;">WeChat</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Messenger</td>
                                        <td class="text-center" style="font-weight: bold;">Viber</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center"><img class="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px"></div>
                    <p style="font-weight: bold;font-size: 20px;margin-bottom: 1px;text-align: center;">Ellane Lee O. Boniol</p>
                    <p style="text-align: center;">IT Specialist - Intern</p>
                    <p style="margin-bottom: 0px;text-align: center;"><strong>Contact Number/s:</strong></p>
                    <p style="text-align: center;">0991 902 9017</p>
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Telegram</td>
                                        <td class="text-center" style="font-weight: bold;">WeChat</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Messenger</td>
                                        <td class="text-center" style="font-weight: bold;">Viber</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center"><img class="rounded-circle" src="assets/img/prof%20pic.jpg" width="120px" height="120px"></div>
                    <p style="font-weight: bold;font-size: 20px;margin-bottom: 1px;text-align: center;">James Leonard M. Desena</p>
                    <p style="text-align: center;">IT Specialist - Intern</p>
                    <p style="margin-bottom: 0px;text-align: center;"><strong>Contact Number/s:</strong></p>
                    <p style="text-align: center;">0966 235 5141</p>
                    <div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Telegram</td>
                                        <td class="text-center" style="font-weight: bold;">WeChat</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;font-weight: bold;">Messenger</td>
                                        <td class="text-center" style="font-weight: bold;">Viber</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" style="width: 180.703px;"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                        <td class="text-center"><img src="assets/img/qr%20code%20sample.png" style="width: 150px;height: 150px;"></td>
                                    </tr>
                                </tbody>
                            </table>
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