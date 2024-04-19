import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GDSLogo from '../assets/3.png';
import { Link } from 'react-router-dom';

const GDS = () =>{
  return(
    <div>
      <Header/>
      <div className='cons_pflex m-5'>
        <div className='cons_cflex' style={{padding: 50}}> 
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={GDSLogo} style={{ width: 350 , height: 110 }} alt="Supernova Logo" />
          </div>
          <h5 style={{ textAlign: 'center', marginTop:20 }}>GDS CAPITAL INCORPORATED</h5>
        </div>
      <div className='cons_cflex'>
        <h1 style = {{textAlign: 'center'}}>ON PROGRESS...</h1>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to = '/'>
        <button style={{paddingInline: 60, marginBottom: 50}}>Return To Home</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default GDS;