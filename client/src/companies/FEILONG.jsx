import React from 'react';
import Feilong from '../assets/Feilong.png';
import { Link } from 'react-router-dom';

const VOLTION = () =>{
  return(
    <div>
      <div className='cons_pflex' style={{margin:11.5}}>
        <div className='cons_cflex' style={{padding: 50}}> 
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Feilong} style={{ width: 400 , height: 'auto' }} alt="Feilong Logo" />
          </div>
          <h5 style={{ textAlign: 'center', marginTop:30 }}>Feilong Legal</h5>
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

export default VOLTION;