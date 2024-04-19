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
            <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3'>
            <h5>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h5>
          </div>
        </div>
      </div>
      <div className='container-fluid' style = {{backgroundColor: '#D9D9D9'}}>
        <h3 style = {{marginLeft: 50, paddingTop: 20}}>Select an Application:</h3>
        <div className='parent_container'>
          <div className='child_containers'></div>
          <div className='child_containers'></div>
          <div className='child_containers'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default GDS;
