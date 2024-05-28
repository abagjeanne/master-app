import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import WithoutAuth from '../../auth/WithoutAuth';

const LoginPage = () => {
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://master-app-lckm.onrender.com/api/auth/login', {
        userName,
        passWord,
      });    
      if (response.status === 200) {
        const{ message, token } = response.data;
        localStorage.setItem('token', token)
        navigate('/admin/dashboard')
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:'#222840', color:'white'}}>
      <div className="row justify-content-center">
        <div className="border p-4 mt-5" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Admin Login</h2>
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

export default WithoutAuth(LoginPage);
