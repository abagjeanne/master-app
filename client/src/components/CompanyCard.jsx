import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ companyName, imgSrc, imgLink }) => {
  return (
    <div className="col">
      <div className="p-4 company-card">
        <span className="badge rounded-pill bg-primary mb-2">Companies</span>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col" style={{ marginTop: "5px", marginBottom: "5px" }}>
            <Link to={imgLink}>
              <img src={imgSrc} style={{ height:"100px", width: "280px", textAlign: "left", objectFit: "contain" }} alt={companyName}/>
            </Link>
          </div>
        </div>
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>{companyName}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
