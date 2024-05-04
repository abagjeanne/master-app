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
          <h5 style={{ textAlign: 'center' }}>FEILONG LEGAL</h5>
        </div>
      <div className='cons_cflex'>
        <h1 style = {{textAlign: 'center'}}>ON PROGRESS...</h1>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to = '/'>
        <button className='rbtn' style={{paddingInline: 60, marginBottom: 80}}>Return To Home</button>
        </Link>
      </div>
    {/* UNCOMMENT WHEN THERE ARE NEW APPS 
      <div className='container text-center mt-4'>
        <div className='row'>
          <div className='col'>
            <img src={Feilong} style={{width: 300, height: 'auto' }} alt="GDS-Intl Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mb-5'>
            <h5 style={{fontWeight:'bold'}}>FEILONG LEGAL</h5>
          </div>
        </div>
      </div>
      <div className='container-xxl feilong_innerbox' style = {{position:'relative', marginBottom:35, }}>
      <h4 style = {{padding:'20px',paddingTop:'50px',textAlign:'center', fontWeight: 'bold', color: 'white'}}>
        <FontAwesomeIcon icon={faArrowLeft} style={{position:'absolute', top: '20px', left:'20px'}} onClick={() => window.history.back()}/>
          Choose an Application to Get Started:</h4>
        <div className='parent_container'>
          <Link to = 'http://202.175.224.156:4040' target='_blank'>
            <div className='feilong_child_containers'>
              Lorem Ipsum
            </div>
          </Link>
        </div>
      </div>*/}
    </div>
  );
};

export default VOLTION;