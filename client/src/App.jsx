import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx'

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
              <Footer/>
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
