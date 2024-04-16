import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
      <div className="container-fluid">
          <Link to={"/"} className='navbar-brand d-flex align-items-center'>GDS Group - Work From Home Site</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <NavLink to={"/"} className='nav-link'>Home</NavLink>
            </li>
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <NavLink to={"/companies"} className='nav-link'>Company</NavLink>
            </li>
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <NavLink to={"/links"} className='nav-link'>Links</NavLink>
            </li>
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <NavLink to={"/information"} className='nav-link'>Information</NavLink>
            </li>
            <li className="nav-item" style={{ fontSize: "18px" }}>
              <NavLink to={"/about-us"} className='nav-link'>About Us</NavLink>
            </li>
          </ul>
          <Link to={"/contact-us"} className='btn btn-primary ms-md-2' role="button" style={{ fontSize: "18px" }}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
