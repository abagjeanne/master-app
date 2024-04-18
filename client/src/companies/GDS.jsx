import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  // State variables for username, password, and error message
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API to validate login
      const response = await axios.post('http://localhost:8008/api/auth/login', {
        userName,
        passWord,
      });

      // If the login is successful (status code 200), redirect to the dashboard or perform any other action
      if (response.status === 200) {
        alert('Login successful!');
        // Redirect or perform any other action here
      } else {
        // If the login fails, show an error message
        setError('Invalid username or password');
      }
    } catch (error) {
      // If an error occurs (e.g., network error), show an error message
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center">
        <div className="border p-4 mt-5" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" value={userName} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" value={passWord} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
