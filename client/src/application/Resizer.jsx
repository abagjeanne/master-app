import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GDSLogo from '../assets/GDS Travel.png';
import Upload from '../assets/upload.png';

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function handleDropdownClick(event) {
  const selectedOption = event.target.textContent;
  document.getElementById("selectedSize").textContent = selectedOption;
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const Resizer = () => {
  // Function to handle file selection
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

      {/*Content */}
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
          <div className='neu_box mb-5' style={{paddingInline:100}}>
              <div className='row'>
                  <h3 className="my-5"style={{textAlign: 'center',fontWeight: 'bold', marginBottom:30, marginTop:30}}>Image Option:</h3> 
              </div>
              <div className='row mb-3' style ={{display: 'flex', textAlign:'center'}}>
                <div className='col my-2'>
                  <div className='dropdown '>
                  <button onClick={handleDropdownClick} className="dropbtn" style={{width:170}}> 
                    <span id="selectedSize">Select Size -➤</span> </button>
                    <div id="myDropdown" className="dropdown-content">
                      <a href="#">2 x 2</a>
                      <a href="#">1 x 1</a>
                      <a href="#">Passport Size</a>
                    </div>
                  </div>
                  
                </div>
                <div className='col my-2'>
                  <button className='select' style={{padding: 16}}>Select</button>
                </div>
              </div>
              <div className='row'>
                <div className='col'style={{ textAlign: 'center' }}>
                  <button class='my-5'>Download</button>
                </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )

}

export default Resizer