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
            <div class="container"><a class="navbar-brand d-flex align-items-center" href="#" style="margin-left: 0px;"><span style="font-size: 22px;">GDS Group - Work From Home Site</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-5"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-5" style="margin-left: 6px;margin-right: -17px;font-size: 14px;">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="index.php">Home</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="companies.php">Companies</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="links.php">Links</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link" href="info.php">Information</a></li>
                        <li class="nav-item" style="font-size: 18px;"><a class="nav-link active" href="about-us.php">About Us</a></li>
                    </ul><a class="btn btn-primary ms-md-2" role="button" href="contact-us.php" style="font-size: 18px;">Contact Us</a>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <div class="container" style="margin-top: 30px;">
            <div class="row">
                <div class="col">
                    <h1 style="font-size: 22px;font-weight: bold;margin-bottom: 0px;">GDS GROUP OF COMPANIES RESOURCES CENTER</h1>
                    <h1 style="font-size: 18px;">WHAT IS THIS?</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p style="margin-top: 18px;">Welcome to the GDS Group of Companies Resource Center! This website serves as a comprehensive platform tailored to the needs of our valued staff and employees across the GDS Group of Companies. Here’s a breakdown of what you can expect:<br><br>1. <strong><span style="text-decoration: underline;">Centralized Access</span></strong>: Our platform provides centralized access to a wide array of company resources. Whether you're working from home, adopting a hybrid model, or on-site at our offices, you can conveniently access the tools and information you need from one location.<br><br>2. <strong><span style="text-decoration: underline;">Diverse Resources</span></strong>: From company policies and employee benefits information to training materials and HR forms, we've got you covered. You'll find everything you need to navigate your role within the company, stay informed, and access essential documents and resources.<br><br>3. <strong><span style="text-decoration: underline;">User-Friendly Interface</span></strong>: We've designed our platform with user experience in mind. Navigating through the website is intuitive, making it easy for you to find what you're looking for quickly. Whether you're a new hire or a seasoned employee, you'll find the layout intuitive and user-friendly.<br><br>4. <strong><span style="text-decoration: underline;">Accessibility</span></strong>: With the increasing prevalence of remote work, accessibility is paramount. Our website is accessible from anywhere with an internet connection, allowing you to access company resources from the comfort of your home or wherever you may be working.<br><br>5. <strong><span style="text-decoration: underline;">Regular Updates</span></strong>: We understand the importance of keeping information current and relevant. That's why we ensure that our website is regularly updated with the latest company policies, training materials, HR forms, and other essential resources. You can trust that the information you find here is up-to-date and accurate.<br><br>6. <strong><span style="text-decoration: underline;">Feedback and Suggestion</span></strong>s: Your feedback matters to us. We encourage you to share your thoughts and suggestions for improving the platform. Whether you have ideas for additional resources or suggestions for enhancing user experience, we're all ears. Your input helps us continuously improve and better serve our employees.<br><br>In essence, this website is your go-to destination for all things related to your employment within the GDS Group of Companies. It's designed to empower you with the resources and information you need to succeed in your role and stay connected with the broader company community. Welcome aboard, and thank you for being a part of our team!</p>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: 50px;">
            <div class="row">
                <div class="col">
                    <h1 style="font-size: 18px;">Frequently Asked Questions (FAQs)</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p style="margin-top: 18px;"><strong>Question</strong>: What is the GDS Group of Companies Resource Center?<br><strong>Answer</strong>: The GDS Group of Companies Resource Center is a centralized platform designed to provide our staff/employees with convenient access to various company resources, irrespective of their work setup - be it Work From Home, Hybrid, or On-Site office works.<br><br><br><strong>Question</strong>: What kind of resources are available on the platform?<br><strong>Answer</strong>: The platform hosts a diverse range of resources including but not limited to company policies, employee benefits information, training materials, HR forms, IT support guides, company news, and updates, among others.<br><br><br><strong>Question</strong>: Who can access the GDS Group of Companies Resource Center?<br><strong>Answer</strong>: All employees of the GDS Group of Companies have access to the resource center. Access credentials and permissions may vary depending on the employee's role and department within the company.<br><br><br><strong>Question</strong>: How do I access the Resource Center?<br><strong>Answer</strong>: Employees can access the Resource Center by logging in through the company's intranet portal using their designated username and password. Detailed instructions for access will be provided by the HR department or IT support team.<br><br><br><strong>Question</strong>: Can I access the Resource Center from home?<br><strong>Answer</strong>: Yes, the Resource Center is accessible from anywhere with an internet connection, allowing employees to conveniently access company resources from the comfort of their homes.<br><br><br><strong>Question</strong>: What if I encounter technical issues while accessing the Resource Center?<br><strong>Answer</strong>: If you encounter any technical issues or have trouble accessing the Resource Center, please reach out to the IT support team for assistance. They will be able to help troubleshoot and resolve any issues promptly.<br><br><br><strong>Question</strong>: Are there specific guidelines for using the Resource Center?<br><strong>Answer</strong>: While using the Resource Center, employees are expected to adhere to company policies regarding data security, confidentiality, and acceptable use of company resources. Any misuse or violation of these guidelines may result in disciplinary action.<br><br><br><strong>Question</strong>:&nbsp;Can I suggest additional resources to be added to the platform?<br><strong>Answer</strong>: Absolutely! We value input from our employees and welcome suggestions for additional resources that could benefit the company. Please feel free to submit your suggestions to the HR department or the designated resource center administrator.<br><br><br><strong>Question</strong>: Is the Resource Center regularly updated with new information?<br><strong>Answer</strong>: Yes, the Resource Center is regularly updated with new information, including policy updates, training materials, and company announcements. We strive to ensure that the content remains relevant and up-to-date for the benefit of our employees.</p>
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