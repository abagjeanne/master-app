import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabButton({ label, icon, onClick, isActive }) {
  return (
    <li className="nav-item">
      <button 
        className={`nav-link btn ${isActive ? 'active' : ''}`} 
        onClick={onClick}
      >
        {icon && (
          <span className="icon-circle me-2">
            <FontAwesomeIcon icon={icon} className="text-white" />
          </span>
        )} {/* Render the icon if provided */}
        {label}
      </button>
    </li>
  );
}

export default TabButton;
