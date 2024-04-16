import React from 'react';
import CompanyCard from './CompanyCard'; 

import GDSLogo from '../assets/3.png';
import StarlightLogo from '../assets/Starlight.png';
import PDMNLogo from '../assets/PDMN.png';
import SupernovaLogo from '../assets/SUPERNOVA - 10.12.23.png';
import TravelLogo from '../assets/GDS Travel.png';
import VoltionLogo from '../assets/Voltion.png';

const Main = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: "27px" }}>COMPANIES</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <CompanyCard companyName="GDS CAPITAL INCORPORATED" imgSrc={GDSLogo} altText="GDS Capital Incorporated" />
          <CompanyCard companyName="PHILIPPINE DRAGON MEDIA NETWORK CORPORATION" imgSrc={PDMNLogo} altText="Philippine Dragon Media Network Corporation" />
          <CompanyCard companyName="SUPERNOVA INNOVATION INCORPORATED" imgSrc={SupernovaLogo} altText="SUPERNOVA INNOVATION INCORPORATED" />
          <CompanyCard companyName="GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED" imgSrc={TravelLogo} altText="GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED" />
          <CompanyCard companyName="VOLTION MOTORS PHILIPPINES" imgSrc={VoltionLogo} altText="VOLTION MOTORS PHILIPPINES" />
          <CompanyCard companyName="STARLIGHT BUSINESS CONSULTING SERVICES INCORPORATED" imgSrc={StarlightLogo} altText="STARLIGHT BUSINESS CONSULTING SERVICES INCORPORATED" />
        </div>
      </div>
    </div>
  );
};

export default Main;
