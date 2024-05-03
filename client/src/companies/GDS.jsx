import React from 'react';
import GDSLogo from '../assets/3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const GDS = () =>{
  return(
    <div>
      <div className='container text-center mt-4'>
        <div className='row'>
          <div className='col'>
            <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS-Intl Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 mb-5'>
            <h5 style={{fontWeight:'bold'}}>GDS CAPITAL INCORPORATED</h5>
          </div>
        </div>
      </div>

      {/*Content */}
      <div className='container-xxl gds_innerbox' style = {{marginBottom:35}}>
        <h4 style = {{padding:'20px',paddingTop:'50px',textAlign:'center', fontWeight: 'bold'}}>Choose an Application to Get Started:</h4>
        <div className='parent_container'>
          <Link to = 'http://202.175.224.156:4040' target='_blank'>
            <div className='gds_child_containers'>
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

export default GDS;