import React from 'react'

const Header = () => {

  return(
    <div>
      <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ marginLeft: "0px" }}>
            <span style={{ fontSize: "22px" }}>GDS Group - Work From Home Site</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1" style={{ marginLeft: "6px", marginRight: "-17px", fontSize: "14px" }}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ fontSize: "18px" }}>
                <a className="nav-link active" href="index.php">Home</a>
              </li>
              <li className="nav-item" style={{ fontSize: "18px" }}>
                <a className="nav-link" href="companies.php">Companies</a>
              </li>
              <li className="nav-item" style={{ fontSize: "18px" }}>
                <a className="nav-link" href="links.php">Links</a>
              </li>
              <li className="nav-item" style={{ fontSize: "18px" }}>
                <a className="nav-link" href="info.php">Information</a>
              </li>
              <li className="nav-item" style={{ fontSize: "18px" }}>
                <a className="nav-link" href="about-us.php">About Us</a>
              </li>
            </ul>
            <a className="btn btn-primary ms-md-2" href="contact-us.php" role="button" style={{ fontSize: "18px" }}>Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;