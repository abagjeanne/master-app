import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TabButton({ label, icon, onClick, isActive }) {
  return (
    <li className="nav-item">
      <button 
        className={`nav-link tab ${isActive ? 'active' : ''}`} 
        onClick={onClick} 
        style={{ 
          color: "#efefef",
          border: "none", // Remove button border
          background: "none", // Remove button background
          cursor: "pointer", // Change cursor to pointer on hover
          padding: "10px 20px", // Add padding for better spacing
          outline: "none", // Remove outline on focus
          transition: "background-color 0.3s", // Add smooth transition for hover effect
          borderRadius: isActive ? "10px" : "none", // Apply borderRadius conditionally
          borderRight: isActive ? "10px solid #F45164" : "none", // Apply right border when active
          fontWeight: isActive ? "bold" : "none",
           backgroundColor: isActive ? "#74747485" : "none"
        }}
        // Add hover effect
        onMouseEnter={(e) => e.target.style.backgroundColor = "#333"}
        onMouseLeave={(e) => e.target.style.backgroundColor = ""}
      >
        {icon && (
          <span className="icon-circle me-2">
            <FontAwesomeIcon icon={icon} style={{ color: "#F45164" }} />
          </span>
        )}
        {label}
      </button>
    </li>
  );
}

export default TabButton;
