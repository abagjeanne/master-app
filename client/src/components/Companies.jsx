import React from 'react';
import CompanyCard from './CompanyCard'; 

import GDSLogo from '../assets/3.png';
import StarlightLogo from '../assets/Starlight.png';
import PDMNLogo from '../assets/PDMN.png';
import SupernovaLogo from '../assets/Supernova.png';
import TravelLogo from '../assets/GDS Travel.png';
import VoltionLogo from '../assets/Voltion.png';
import FeilongLogo from '../assets/Feilong.png';


const Main = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="display-6" style={{ fontWeight: 'bold' }}>Companies</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <CompanyCard companyName="GDS CAPITAL INCORPORATED" imgSrc={GDSLogo} imgLink='/gds' />
          <CompanyCard companyName="PHILIPPINE DRAGON MEDIA NETWORK CORPORATION" imgSrc={PDMNLogo} imgLink='/pdmn' />
          <CompanyCard companyName="SUPERNOVA INNOVATION INCORPORATED" imgSrc={SupernovaLogo} imgLink='/supernova' />
          <CompanyCard companyName="GDS INTERNATIONAL TRAVEL AGENCY INCORPORATED" imgSrc={TravelLogo} imgLink='/gdsintl' />
          <CompanyCard companyName="VOLTION MOTORS PHILIPPINES" imgSrc={VoltionLogo} imgLink='/voltion' />
          <CompanyCard companyName="STARLIGHT BUSINESS CONSULTING SERVICES INCORPORATED" imgSrc={StarlightLogo} imgLink='/starlight' />
          <CompanyCard companyName="FEILONG LEGAL" imgSrc={FeilongLogo} imgLink='/feilong'/>
        </div>
      </div>
    </div>
  );
};

export default Main;
