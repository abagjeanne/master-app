import React from 'react';
import Supernovalogo from '../assets/Supernova.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SUPERNOVA = () =>{
  return(
    <div>
      <div className='container text-center mt-4'>
        <div className='row'>
          <div className='col'>
            <img src={Supernovalogo} style={{width: 300, height: 100 }} alt="GDS-Intl Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 mb-5'>
            <h5 style={{fontWeight:'bold'}}>STARLIGHT BUSINESS CONSULTING<br />SERVICES INCORPORATED</h5>
          </div>
        </div>
      </div>

      {/*Content */}
      <div className='container-xxl supernova_innerbox' style = {{position:'relative', marginBottom:35}}>
        <h4 style = {{padding:'20px',paddingTop:'50px',textAlign:'center', fontWeight: 'bold', color: 'white'}}>
       <FontAwesomeIcon icon={faArrowLeft} style={{position:'absolute', top: '20px', left:'20px'}} onClick={() => window.history.back()}/>
          Choose an Application to Get Started:</h4>
        <div className='parent_container'>
          <Link to = 'http://202.175.224.156:4040' target='_blank'>
            <div className='supernova_child_containers'>
            <FontAwesomeIcon icon={faCartFlatbed} style={{margin:'auto',width:'70', height:'auto'}} />
                <div style={{margin:'auto',textAlign: 'center'}}>
                  INVENTORY SYSTEM
                </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SUPERNOVA;