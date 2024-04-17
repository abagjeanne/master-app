import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Company from './components/Companies.jsx';
import Links from './components/Links.jsx';
import Information from './components/Information.jsx';
import About from './components/AboutUs.jsx';
import Contact from './components/ContactUs.jsx';
import AdminLogin from './admin/AdminLogin.jsx'
//import GDSPhoto from './GDS/GDSPhoto.jsx'
function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route 
          exact
          path='/'
          element={
            <>
              <Header/>
              <Main/>
              <Company/>
              <Links/>
              <Information/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/companies'
          element={
            <>
              <Header/>
              <Company/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/links'
          element={
            <>
              <Header/>
              <Links/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/information'
          element={
            <>
              <Header/>
              <Information/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/about-us'
          element={
            <>
              <Header/>
              <About/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/contact-us'
          element={
            <>
              <Header/>
              <Contact/>
              <Footer/>
            </>
          }
        />
        <Route
          exact
          path='/admin'
          element={
            <>
              <AdminLogin/>
            </>
          }
        />
         {/* 
          <Route exact path='/GDS'
          element={
            <>
              <GDSPhoto/>
            </>
          }
         
         */}
      </Routes>
    </div>
  )
}

export default App
