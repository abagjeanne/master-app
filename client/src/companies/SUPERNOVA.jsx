import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GDSLogo from '../assets/GDS Travel.png';

const SUPERNOVA = () =>{
  return(
    <div>
      <Header/>
        <div className='cons_pflex'>
          <div className='cons_cflex'> 
          
          </div>
          <div className='cons_cflex'>

          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button >Return To Home</button>
        </div>
        
      <Footer/>
    </div>
  );
};

export default SUPERNOVA;