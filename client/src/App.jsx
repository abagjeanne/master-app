import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Company from "./components/Companies.jsx";
import Scroll from "./components/Scroll.jsx";
import Links from "./components/Link/Links.jsx";
import Information from "./components/Information.jsx";
import About from "./components/AboutUs.jsx";
import Contact from "./components/ContactUs.jsx";
import GDS from "./companies/GDS.jsx";
import GDSInternational from "./companies/GDSInt.jsx";
import PDMN from "./companies/PDMN.jsx";
import STARLIGHT from "./companies/STRLGT.jsx";
import SUPERNOVA from "./companies/SUPERNOVA.jsx";
import VOLTION from "./companies/VLTN.jsx";
import FEILONG from "./companies/FEILONG.jsx"

import Resize from "./application/Resizer.jsx";
import Remover from "./application/Bg_Remover.jsx";
import Enhancer from "./application/Enhancer.jsx"
import LinkPost from "./components/Link/LinkPost.jsx";

import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import LinkCard from "./admin/AdminComponents/Link/LinkCard.jsx";
import FAQCard from "./admin/AdminComponents/FAQ/FAQCard.jsx";
import ViewLink from "./admin/AdminComponents/Link/ViewLink.jsx";
import EditLink from "./admin/AdminComponents/Link/EditLinkForm.jsx";
import LinkPrev from "./components/Link/LinkPreview.jsx";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Company />
              <LinkPrev />
              <Information />
              <Footer />
              <Scroll />
            </>
          }
        />
        <Route
          exact
          path="/companies"
          element={
            <>
              <Header />
              <Company />
              
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/links"
          element={
            <>
              <Header />
              <Links />
              <Footer />
              <Scroll />
            </>
          }
        />
        <Route
          exact
          path="/information"
          element={
            <>
              <Header />
              <Information />
              <Footer />
              <Scroll />
            </>
          }
        />
        <Route
          exact
          path="/about-us"
          element={
            <>
              <Header />
              <About />
              <Footer />
              <Scroll />
            </>
          }
        />
        <Route
          exact
          path="/contact-us"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
              <Scroll />
            </>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <>
              <AdminLogin />
            </>
          }
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <>
              <AdminDashboard />
            </>
          }
        />
        <Route
          exact
          path="/admin/viewlink/:id"
          element={
            <>
              <ViewLink />
            </>
          }
        />
        <Route
          exact
          path="/admin/editlink/:id"
          element={
            <>
              <EditLink />
            </>
          }
        />
        <Route
          exact
          path="/gds"
          element={
            <>
            <Header/>
            <GDS />
            <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/gdsintl"
          element={
            <>
            <Header />
            <GDSInternational />
            <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/pdmn"
          element={
            <>
            <Header/>
            <PDMN />
            <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/starlight"
          element={
            <>
            <Header />
            <STARLIGHT />
            <Footer />
            </>
          }
        />
        <Route
          exact
          path="/supernova"
          element={
            <>
            <Header/>
            <SUPERNOVA />
            <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/voltion"
          element={
            <>
            <Header />
            <VOLTION />
            <Footer/>
            </>
          }
        />
        <Route
          exact
          path="/feilong"
          element={
            <>
            <Header />
            <FEILONG />
            <Footer/>
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
        <Route
          exact
          path="/gdsintl-Resizer"
          element={
            <>
              <Header/>
              <Resize />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/gdsintl-Remover"
          element={
            <>
              <Header/>
              <Remover />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="gdsintl-Enhancer"
          element={
            <>
              <Header/>
              <Enhancer />
              <Footer />
            </>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
