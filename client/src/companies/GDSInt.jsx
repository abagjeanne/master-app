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
      <div className='container-fluid ' style = {{paddingBottom:35 ,backgroundColor: '#D9D9D9'}}>
        <h3 style = {{marginLeft: 50, paddingTop: 20}}>Select an Application:</h3>
        <div className='parent_container'>
          <Link to = '/gdsintl-Resize'>
            <div className='child_containers'>
            <img src = {Enhance} style={{ marginRight:20,marginBottom: 30,height:180}}></img>
            <div style={{textAlign: 'center'}}>IMAGE CROPPING <br/>AND RESIZING</div>
            </div>
          </Link>
          <Link to = '/gdsintl-Enhance'>
            <div className='child_containers'>
              <img src = {Resize} style={{height:150}}></img>
              <div style={{textAlign: 'center'}}>IMAGE ENHANCING AND BACKGROUND REMOVER</div>
            </div>
          </Link>
        <div className='child_containers' style={{ backgroundColor:'gray' }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default GDS;
