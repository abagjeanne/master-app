  import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GDSLogo from '../assets/GDS Travel.png';

const GDS = () => {
  return (
    <div>
      <Header />
      <div className='container text-center mt-5'>
        <div className='row'>
          <div className='col'>
            <img src={GDSLogo} style={{ width: 400, height: 100 }} alt="GDS Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3'>
            <h4>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h4>
          </div>
        </div>
      </div>
      <div className='container bg-primary' >
        <div className='row'>
          <div className='col'> Select an Application:
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default GDS;
