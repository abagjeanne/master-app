import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GDSLogo from '../assets/3.png';
import Synology from '../assets/synology.png';

const Footer = () => {
  return (
    <footer className="text-center bg-dark pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
            <Link to={"/"}>
              <img style={{height:'80px'}} src={GDSLogo} className="img-fluid py-2" alt="GDS Group Logo" />
            </Link>
            <p className="text-white">Work From Home Website Resources</p>
            <p className="text-white">Copyright&nbsp;© 2024 IT Department</p>
            <p className="text-white">(Philippine Dragon Media Network Corporation)</p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img style={{height:'80px'}} src={Synology} className="img-fluid py-2" alt="Synology Logo" />
                <p className="text-white">Current Server Status and Properties</p>
              </div>
            </div>
            <div className="row mx-5">
              <div className="col">
                <div className="table-responsive">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th style={{ width: "180.078px" }}>Title</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Server Hostname</td>
                        <td><span id="hostname" className="text-white"></span></td>
                      </tr>
                      <tr>
                        <td>Server Public IP</td>
                        <td><span id="publicIP" className="text-white"></span></td>
                      </tr>
                      <tr>
                        <td>Server Runtime</td>
                        <td><span id="runtime" className="text-white"></span></td>
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
  );
};

export default Footer;
