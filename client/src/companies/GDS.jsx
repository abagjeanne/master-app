import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
//import Footer from './components/Footer.jsx'

function GDS(){
  return (
    <div>
      <ToastContainer/>
        <Header/>
    </div>
  )


}

export default GDS