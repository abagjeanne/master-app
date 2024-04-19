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
          <div className='neu_box mb-5' >
            <div className='row'style={{padding:50, paddingInline:80}}>
              <div className='col'style={{ textAlign: 'center' }}>
              <img src={Upload} style={{width:100}}></img>
              <h6 style= {{textAlign: 'center', marginTop:20}}>Upload Image</h6>
            </div>
              <div className='col' style ={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button style={{borderRadius: 15, width:200, marginLeft:10, marginTop:10}}>Select File</button>
              </div>
            </div>
            
          </div>
          <div className='neu_box mb-5' style={{paddingInline:50}}>
            <div className='row'>
                <h3 style={{textAlign: 'center',fontWeight: 'bold', marginBottom:30, marginTop:30}}>Image Option:</h3> 
            </div>
            <div className='row mb-4'>
              <div className='col'>
                <div className='dropdown'>
                  <button onclick="myFunction()" class="dropbtn" style={{width:200}}>Select Size -➤</button>
                  <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
              <div className='col'>
                <button className='select' style={{padding: 16}}>Select</button>
              </div>
            </div>
            <div className='row'>
              <div className='col'style={{ textAlign: 'center' }}>
                <button class='mb-5'>Download</button>
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