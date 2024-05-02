import React from 'react';
import PDMNLogo from '../assets/PDMN.png';
import { Link } from 'react-router-dom';

const PDMN = () =>{
  return(
    <div>
      <div className='cons_pflex m-5'>
        <div className='cons_cflex' style={{padding: 50}}> 
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={PDMNLogo} style={{ width: 380 , height: 'auto' }} alt="Supernova Logo" />
          </div>
          <h5 style={{ textAlign: 'center', marginTop:30 }}>PHILLIPINE DRAGON MEDIA NETWORK CORPORATION</h5>
        </div>
      <div className='cons_cflex'>
        <h1 style = {{textAlign: 'center'}}>ON PROGRESS...</h1>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to = '/'>
        <button className='rbtn' style={{paddingInline: 60, marginBottom: 50}}>Return To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PDMN;