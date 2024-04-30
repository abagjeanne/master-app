import React from 'react';
import ContactCard from './ContactCard'; 

import QR from '../assets/qrsample.png';
import Profile from '../assets/profile.jpg';

const Contact = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-10 text-center mx-auto">
            <h2 style={{ fontSize: '27px' }}>Got Problems/Concerns?</h2>
            <p className="w-lg-50" style={{ fontSize: '15px' }}>Please contact our IT Team with their given contact numbers and/or Social Media QR Codes presented here.</p>
          </div>
        </div>
        <div className="row justify-content-center gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <ContactCard Name="Jan Wilbert See" Position="IT Head" Number="0917 541 9891 / 0995 251 1442" profile={Profile}  telegramQR={QR} wechatQR={QR} messengerQR={QR} viberQR={QR} altText="Jan Wilbert See" />
        <ContactCard Name="Prinze Joshua M. Valloso" Position="IT Specialist" Number="0920 667 2004 / 0995 507 1063" profile={Profile}  telegramQR={QR} wechatQR={QR} messengerQR={QR} viberQR={QR} altText="Prinze Joshua M. Valloso" />
        <ContactCard Name="Jeanne Mari S. Abag" Position="IT Specialist - Intern" Number="0966 481 0660" profile={Profile}  telegramQR={QR} wechatQR={QR} messengerQR={QR} viberQR={QR} altText="Jeanne Mari S. Abag" />
        <ContactCard Name="Ellane Lee O. Boniol" Position="IT Specialist - Intern" Number="0991 902 9017" profile={Profile}  telegramQR={QR} wechatQR={QR} messengerQR={QR} viberQR={QR} altText="" />
        <ContactCard Name="James Leonard M. De Sena" Position="IT Specialist - Intern" Number="0966 235 5141" profile={Profile}  telegramQR={QR} wechatQR={QR} messengerQR={QR} viberQR={QR} altText="James Leonard M. Desena" />
          {/* Repeat the above structure for other IT team members */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
