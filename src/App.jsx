import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from './components/Home/About';
import PowerPlant from './pages/PowerPlant';
import InformationTech from './pages/InformationTech'


import Sectors from './pages/Sectors';
import Aboutus from './pages/Aboutus';
import Telecom from './pages/Telecom';
import Tourism from './pages/Tourism'

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}           />
      <Route path="/about" element={<About />}     />                             
      <Route path="/sectors" element={<Sectors />} />                  
      <Route path="/Aboutus" element={<Aboutus />} /> 
      <Route path="/PowerPlant" element={<PowerPlant />}    />  
      <Route path= "/Telecom" element={<Telecom />}   />   
      <Route path="/InformationTech" element={<InformationTech />} />  
      <Route path="/Tourism" element={<Tourism />}  />   

    </Routes> 
  </Router>
  <Footer/>
  </>
  
  )
}

export default App
