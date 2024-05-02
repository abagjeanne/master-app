import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabButton({ label, icon, onClick, isActive }) {
  return (
    <li className="nav-item">
      <button 
        className={`nav-link tab ${isActive ? 'active' : ''}`} 
        onClick={onClick}
      >
        {icon && (
          <span className="icon-circle me-2">
            <FontAwesomeIcon icon={icon} style={{color:"#6C50F3"}} />
          </span>
        )} {/* Render the icon if provided */}
        {label}
      </button>
    </li>
  );
}

export default TabButton;
