import React from 'react';
import CompanyCard from './CompanyCard'; 
import {Link} from 'react-router-dom';

import GDSLogo from '../assets/3.png';
import StarlightLogo from '../assets/Starlight.png';
import PDMNLogo from '../assets/PDMN.png';
import SupernovaLogo from '../assets/Supernova.png';
import TravelLogo from '../assets/GDS Travel.png';
import VoltionLogo from '../assets/Voltion.png';

const Main = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6" style={{fontWeight:'bold'}}>Companies</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <Link to='/gds'>
            <CompanyCard companyName="GDS CAPITAL INCORPORATED" imgSrc={GDSLogo} altText="GDS Capital Incorporated" />
          </Link>
          
          <Link to='/pdmn'>
          <CompanyCard companyName="PHILIPPINE DRAGON MEDIA NETWORK CORPORATION" imgSrc={PDMNLogo} altText="Philippine Dragon Media Network Corporation" />
          </Link>
          
          <Link to='/supernova'>
          <CompanyCard companyName="SUPERNOVA INNOVATION INCORPORATED" imgSrc={SupernovaLogo} altText="SUPERNOVA INNOVATION INCORPORATED" />
          </Link>
          
          <Link to='/gdsintl'>
          <CompanyCard companyName="GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED" imgSrc={TravelLogo} altText="GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED" />
          </Link>
          
          <Link to='/voltion'>
          <CompanyCard companyName="VOLTION MOTORS PHILIPPINES" imgSrc={VoltionLogo} altText="VOLTION MOTORS PHILIPPINES" />
          </Link>

          <Link to='/starlight'>
          <CompanyCard companyName="STARLIGHT BUSINESS CONSULTING SERVICES INCORPORATED" imgSrc={StarlightLogo} altText="STARLIGHT BUSINESS CONSULTING SERVICES INCORPORATED" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
