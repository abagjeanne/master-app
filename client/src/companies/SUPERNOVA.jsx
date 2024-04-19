import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Supernovalogo from '../assets/Supernova.png';
import { Link } from 'react-router-dom';

const SUPERNOVA = () =>{
  return(
    <div>
      <Header/>
      <div className='cons_pflex m-5'>
        <div className='cons_cflex' style={{padding: 50}}> 
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Supernovalogo} style={{ width: 600, height: 200 }} alt="Supernova Logo" />
          </div>
            <h3 style={{ textAlign: 'center', marginTop:20 }}>STARLIGHT BUSINESS CONSULTING<br />SERVICES INCORPORATED</h3>
        </div>
      <div className='cons_cflex'>
        <h1>ON PROGRESS...</h1>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to = '/'>
        <button style={{paddingInline: 60, marginBottom: 20}}>Return To Home</button>
        </Link>
      </div>

        
      <Footer/>
    </div>
  );
};

export default SUPERNOVA;