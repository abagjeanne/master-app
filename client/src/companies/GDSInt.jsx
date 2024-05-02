import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GDSLogo from '../assets/GDS Travel.png';
import Resize from '../assets/resize.png';
import Enhance from '../assets/enhance.png';
import {Link} from 'react-router-dom';


const GDS = () => {
  return (
    <div>
      <Header />
      <div className='container text-center mt-5'>
        <div className='row'>
          <div className='col'>
            <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS Logo" />
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 mb-5'>
            <h5>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h5>
          </div>
        </div>
      </div>

      {/*Content */}
      <div className='container-fluid ' style = {{paddingBottom:35 ,backgroundColor: '#D9D9D9'}}>
        <h3 style = {{marginLeft: 50, paddingTop: 20}}>Select an Application:</h3>
        <div className='parent_container'>
          <Link to = '/gdsintl-Resizer'>
            <div className='gdsint_child_containers'>
            <img src = {Resize} style={{margin: 'auto', height:50}}></img>
            <div style={{textAlign: 'center'}}>IMAGE CROPPING <br/>AND RESIZING</div>
            </div>
          </Link>
          <Link to = '/gdsintl-Remover'>
            <div className='gdsint_child_containers'>
              <img src = {Enhance} style={{marginRight: 3, height:50}}></img>
              <div style={{textAlign: 'center'}}>IMAGE BACKGROUND REMOVER</div>
            </div>
          </Link>
          <Link to = '/gdsintl-Enhancer'>
            <div className='gdsint_child_containers'>
              <img src = {Enhance} style={{marginRight: 10, height:50}}></img>
              <div style={{textAlign: 'center'}}>IMAGE ENHANCER</div>
            </div>
          </Link>
        <div className='gdsint_child_containers' style={{ backgroundColor:'#EFECEC' }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default GDS;
