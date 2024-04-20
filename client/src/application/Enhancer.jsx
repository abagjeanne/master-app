import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GDSLogo from '../assets/GDS Travel.png';
import Upload from '../assets/upload.png';

const Enhancer = () => {
  const handleFileSelect = (event) => {
    // You can access the selected file using event.target.files[0]
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
  };
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

        <div className='container-fluid ' style = {{paddingBottom:35}}>
        <div className='parent_container'>
          <div className='neu_box m-5' >
            <div className='row'style={{padding:70, paddingInline:100}}>
              <div className='col-md-5 mb-1'style={{ textAlign: 'center' }}>
                <img src={Upload} style={{width:100}}></img>
                <h6 style= {{textAlign: 'center', marginTop:20, marginBottom: 20}}>Upload Image</h6>
              </div>
              <div className='col-md-7' style ={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign:'center'}}>
                <input type="file" accept="image/jpeg, image/png" onChange={handleFileSelect} id="fileInput" style={{width: 250}} />
              </div>
            </div>           
          </div>
          
            <div className='neu_box'style={{padding:50, paddingInline:80}}>
                <div className='row'>
                  <h3 style={{textAlign: 'center',fontWeight: 'bold', marginBottom:30, marginTop:30}}>Image Option:</h3> 
                </div>
                <div className='row'>
                  <h5 style={{ marginBottom:30, marginTop:30}}>Remove Background</h5> 
                  <h5 style={{ marginBottom:30, marginTop:30}}>Enhance Photo</h5> 
                </div>
                <div className='row'>
                  <div className='col'style={{ paddingInline:100, textAlign: 'center' }}>
                  <button style={{ borderRadius: 15,paddingInline:100}}>Download</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )

}

export default Enhancer
