import React, { useState } from 'react';
import ContactCard from './ContactCard';

import QR from '../assets/qrsample.png';
import Profile from '../assets/profile.jpg';
import LaneViber from '../assets/lane_v.jpg';
import LaneWC from '../assets/lane_wc.jpg';
import JamesViber from '../assets/james_v.jpg';
import JamesWC from '../assets/james_wc.jpg';
import JinViber from '../assets/jin_v.jpg';
import JinWC from '../assets/jin_wc.jpg';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    pcNumber: '',
    company: '',
    message: '' // New state for message input
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, you can log form data
    console.log(formData);
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      pcNumber: '',
      company: '',
      message: '' // Clear message field after submission
    });
  };

  return (
    <div className="p-5 py-xl-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-3" style={{ fontSize: '27px' }}>Got Problems/Concerns?</h2>
          <p className="mb-4" style={{ fontSize: '15px' }}>Please contact our IT Team with their given contact numbers and/or Social Media QR Codes presented here.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <ContactCard Name="Jan Wilbert See" Position="IT Head" Number="0917 541 9891 / 0995 251 1442" profile={Profile} telegramQR={QR} wechatQR={QR} viberQR={QR} altText="Jan Wilbert See" />
            </div>
            <div className="col">
              <ContactCard Name="Prinze Joshua M. Valloso" Position="IT Specialist" Number="0920 667 2004 / 0995 507 1063" profile={Profile} telegramQR={QR} wechatQR={QR} viberQR={QR} altText="Prinze Joshua M. Valloso" />
            </div>
            <div className="col">
              <ContactCard Name="Jeanne Mari S. Abag" Position="IT Specialist - Intern" Number="0966 481 0660" profile={Profile} telegramQR={QR} wechatQR={JinWC} viberQR={JinViber} altText="Jeanne Mari S. Abag" />
            </div>
            <div className="col">
              <ContactCard Name="Ellane Lee O. Boniol" Position="IT Specialist - Intern" Number="0991 902 9017" profile={Profile} telegramQR={QR} wechatQR={LaneWC} viberQR={LaneViber} altText="" />
            </div>
            <div className="col">
              <ContactCard Name="James Leonard M. De Sena" Position="IT Specialist - Intern" Number="0966 235 5141" profile={Profile} telegramQR={QR} wechatQR={JamesWC} viberQR={JamesViber} altText="James Leonard M. Desena" />
            </div>
            {/* Repeat the above structure for other IT team members */}
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <div className="card p-3 lg-shadow msg" style={{ backgroundColor: '#ffff' }}>
            <h2 className="mb-4" style={{ fontSize: '27px' }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="PC Number" name="pcNumber" value={formData.pcNumber} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <select className="form-select" name="company" value={formData.company} onChange={handleChange} required>
                  <option value="">Select Company</option>
                  <option value="Company A">GDS Capital Incorporated</option>
                  <option value="Company B">Philippine Dragon Media Network Corp.</option>
                  <option value="Company C">Supernova Innovation Incorporated</option>
                  <option value="Company A">GDS International Travel Agency Incorporated</option>
                  <option value="Company B">Voltion Motors Philippines</option>
                  <option value="Company C">Starlight Business Consulting Services Incorporated</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="rbtn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
