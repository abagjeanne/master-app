import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWandMagicSparkles,faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GDSLogo from "../assets/GDS Travel.png"


function Enhancer () {
  return (
    <div>
	    <div className='container text-center' style={{marginTop:'31px'}}>
      <div className='row'>
        <div className='col'>
          <img src={GDSLogo} style={{width: 400, height: 100 }} alt="GDS Logo" />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-3'>
          <h5>GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED</h5>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <div className='enhance_box mb-5'>
          <div className='row justify-content-center'>
             <div className='col-auto my-5'>
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{width:'70', height:'auto'}} />
          </div>
          <div className='col-auto my-5'>
            <Link to="https://www.cutout.pro/photo-enhancer-sharpener-upscaler/upload" target='_blank'>
            <button
              className='rbtn' 
              style={{paddingInline:'10px', verticalAlign:'center'}}>
                Redirect to 'cutout.pro' <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </Link>

          </div>
          <div className='row justify-content-center'>
            <div className='mb-4' style={{textAlign:'center'}}>
            <a href='#' onClick={() => window.history.back()}><FontAwesomeIcon icon={faArrowLeft} /> Return</a>
          </div>
          </div>
          </div>
        </div>
      </div>

      </div>

    </div>
  );
};
 
export default Enhancer;

// 