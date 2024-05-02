import React, { useState } from 'react';
import GDSLogo from "../assets/GDS Travel.png"

const Enhancer = () => {
  return (
    <div>
	    <div className='container text-center mt-5'>
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
      </div>
    </div>
  );
};

export default Enhancer;
