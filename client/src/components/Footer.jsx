import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GDSLogo from '../assets/3.png';
import Synology from '../assets/synology.png';

const Footer = () => {
  return (
    <footer className="text-center bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-xl-6">
            <img src={GDSLogo} style={{ width: "250px", borderColor: "rgb(33, 37, 41)", background: "rgba(255,255,255,0.1)", margin: "0px", marginTop: "20px", marginBottom: "11px" }} width="250" height="96" alt="GDS Group Logo" />
            <p style={{ color: "rgb(255,255,255)" }}>GDS Group of Companies</p>
            <p style={{ marginTop: "-12px", color: "rgb(255,255,255)" }}>Work From Home Website Resources</p>
            <p style={{ marginTop: "36px", textAlign: "center", color: "rgb(255,255,255)" }}>Copyright&nbsp;© 2024 IT Department</p>
            <p style={{ marginTop: "-16px", textAlign: "center", fontSize: "15px", color: "rgb(255,255,255)" }}>(Philippine Dragon Media Network Corporation)</p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col" style={{ background: "rgba(255,255,255,0)" }}>
                <img src={Synology} style={{ borderColor: "rgb(33, 37, 41)", background: "rgba(255,255,255,0.1)", marginTop: "20px", marginBottom: "11px", width: "120px", height: "60px" }} width="250" height="96" alt="Synology Logo" />
                <p style={{ color: "rgb(255,255,255)" }}></p>
                <p style={{ marginTop: "-12px", color: "rgb(255,255,255)" }}>Current Server Status and Properties</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: "180.078px", background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}>Title</th>
                        <th style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}>Server Hostname</td>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}><span id="hostname"></span></td>
                      </tr>
                      <tr>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}>Server Public IP</td>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}><span id="publicIP"></span></td>
                      </tr>
                      <tr>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}>Server Runtime</td>
                        <td style={{ background: "rgba(255,255,255,0)", color: "rgb(255,255,255)" }}><span id="runtime"></span></td>
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
