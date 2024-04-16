import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      {/* Example chart component */}
      <div className="chart">
        {/* Add your chart component here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
