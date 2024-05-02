import React from 'react';
import GDSLogo from '../assets/GDS Travel.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrop, faWandMagicSparkles, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


const GDS = () => {
  return (
    <div>
      <div className='container text-center mt-4'>
        <div className='row'>
          <div className='col'>
            <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS-Intl Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 mb-5'>
            <h5 style={{fontWeight:'bold'}}>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h5>
          </div>
        </div>
      </div>

      {/*Content */}
      <div className='container-xxl innerbox' style = {{marginBottom:35}}>
        <h4 style = {{padding:'20px',paddingTop:'50px',textAlign:'center', fontWeight: 'bold'}}>Choose an Application to Get Started:</h4>
        <div className='parent_container'>
          <Link to = '/gdsintl-Resizer'>
            <div className='gds_int_child_containers'>
              <FontAwesomeIcon icon={faCrop} style={{margin:'auto',width:'70', height:'auto'}} />
                <div style={{margin:'auto',textAlign: 'center'}}>
                  IMAGE CROPPING <br/>AND RESIZING
                </div>
            </div>
          </Link>
          <Link to = '/gdsintl-Remover'>
            <div className='gds_int_child_containers'>
            <FontAwesomeIcon icon={faUserXmark} style={{margin:'auto',width:'70', height:'auto'}} />
              <div style={{margin:'auto',textAlign: 'center'}}>IMAGE BACKGROUND REMOVER</div>
            </div>
          </Link>
          <Link to = '/gdsintl-Enhancer'>
            <div className='gds_int_child_containers'>
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{margin:'auto',width:'70', height:'auto'}} />
              <div style={{margin:'auto',textAlign: 'center'}}>IMAGE ENHANCER</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default GDS;
