import React from 'react';
import GDSLogo from '../assets/3.png';
import { Link } from 'react-router-dom';

const GDS = () =>{
  return(
    <div>
      <div className='cons_pflex m-5'>
        <div className='cons_cflex' style={{padding: 50}}> 
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={GDSLogo} style={{ width: 480 , height: 'auto' }} alt="GDS Capital Incorporated Logo" />
          </div>
          <h5 style={{ textAlign: 'center', marginTop:20 }}>GDS CAPITAL INCORPORATED</h5>
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

export default GDS;