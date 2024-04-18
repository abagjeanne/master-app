import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GDSLogo from '../assets/GDS Travel.png';

const GDS = () => {
  return (
    <div>
      <Header />
        <div className='row m-5'>
          <img src ={GDSLogo}></img>
        <h2 style={{alignItems: 'center'}}>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h2>
        </div>



      <Footer />
    </div>
  );
};

export default GDS;
