import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GDSLogo from '../assets/GDS Travel.png';
import Upload from '../assets/upload.png';

const Enhance = () => {
  return(
    <div>
      <Header/>
      <div>
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
      </div>

      {/*Content */}
      <div className='container-fluid ' style = {{paddingBottom:35}}>
        <div className='parent_container'>
          <div className='neu_box' style={{padding: 50}}>
            <div className='row'>
            <div className='col'style={{ textAlign: 'center' }}>
            <img src={Upload} style={{width:100}}></img>
            <h6 style= {{textAlign: 'center', marginTop:20}}>Upload Image</h6>
            </div>
              <div className='col' style ={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button style={{borderRadius: 15, paddingInline:50}}>Select File</button>
              </div>
            </div>
            
          </div>
          <div className='neu_box'>
            <div className='row'>
                <h3 style={{textAlign: 'center',fontWeight: 'bold'}}>Image Option:</h3> 
            </div>
            <div className='row'>
              <div className='col'>
                <div className='dropdown'>
                  <button onclick="myFunction()" class="dropbtn">Select Size</button>
                  <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
              <div className='col'>
                <button>Select</button>
              </div>
            </div>
            <div className='row'>
              <div className='col'style={{ textAlign: 'center' }}>
                <button>Download</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )

}

export default Enhance