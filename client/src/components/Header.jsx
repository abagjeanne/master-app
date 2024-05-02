import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md py-3">
      <div className="container-fluid">
        <Link to={"/"} className='navbar-brand d-flex align-items-center'>
          <img src={logo} alt="Logo" className="me-2" style={{ height: '60px' }} /> {/* Include your logo image here */}
          GDS Group - Work From Home Site
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem to="/" text="Home" />
            <NavItem to="/companies" text="Company" />
            <NavItem to="/links" text="Links" />
            <NavItem to="/information" text="Information" />
            <NavItem to="/about-us" text="About Us" />
          </ul>
          <Link to="/contact-us" className="btn  ms-md-2" role="button">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text }) => {
  return (
    <li className="nav-item">
      <NavLink to={to} className="nav-link" activeClassName="active">{text}</NavLink>
    </li>
  );
};

export default Header;
