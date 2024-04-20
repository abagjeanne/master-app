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
import GDS from './companies/GDS.jsx';
import GDSInternational from './companies/GDSInt.jsx';
import PDMN from './companies/PDMN.jsx';
import STARLIGHT from './companies/STRLGT.jsx'
import SUPERNOVA from './companies/SUPERNOVA.jsx';
import VOLTION from './companies/VLTN.jsx';
import Resize from './application/Resizer.jsx';
import Enhance from './application/Enhancer.jsx';
import LinkPost from './components/LinkPost.jsx';
import AdminLogin from './admin/AdminLogin.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import LinkCard from './admin/AdminComponents/LinkCard.jsx'
import FAQCard from './admin/AdminComponents/FAQCard.jsx'
import ViewLink from './admin/AdminComponents/ViewLink.jsx'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route exact path='/'
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
        <Route exact path='/companies'
          element={
            <>
              <Header/>
              <Company/>
              <Footer/>
            </>
          }
        />
        <Route exact path='/links'
          element={
            <>
              <Header/>
              <Links/>
              <Footer/>
            </>
          }
        />
        <Route exact path='/information'
          element={
            <>
              <Header/>
              <FAQCard/>
              <Footer/>
            </>
          }
        />
        <Route exact path='/about-us'
          element={
            <>
              <Header/>
              <About/>
              <Footer/>
            </>
          }
        />
        <Route exact path='/contact-us'
          element={
            <>
              <Header/>
              <Contact/>
              <Footer/>
            </>
          }
        />
        <Route exact path='/admin'
          element={
            <>
              <AdminLogin/>
            </>
          }
        />
        <Route
          exact path='/admin/dashboard'
          element={
            <>
              <AdminDashboard/>
            </>
          }
        />                
        <Route exact path='/gds'
          element={
            <>
              <GDS/>
            </>
          }
        />
        <Route exact path = '/gdsintl'
        element = {
          <>
            <GDSInternational/>
          </>
        }
        />
        <Route exact path = '/pdmn'
        element = {
          <>
            <PDMN/>
          </>
        }
        />
        <Route exact path = '/starlight'
        element = {
          <>
            <STARLIGHT/>
          </>
        }
        />
        <Route exact path = '/supernova'
        element = {
          <>
            <SUPERNOVA/>
          </>
        }
        />
        <Route exact path = '/voltion'
        element = {
          <>
            <VOLTION/>
          </>
        }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Header />
              <LinkPost />
              <Footer />
            </>
          }
        />
        <Route exact path = '/gdsintl-Resizer'
        element = {
          <>
            <Resize/>
          </>
        }
        />
        <Route exact path = '/gdsintl-Enhancer'
        element = {
          <>
            <Enhance/>
          </>
        }
        />
        <Route exact path = '/viewlink/:id'
        element = {
          <>
            <ViewLink/>
          </>
        }
        />        
      </Routes>
    </div>
  )
}

export default App
