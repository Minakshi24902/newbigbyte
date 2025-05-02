import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from './components/Home/About';
import PowerPlant from './pages/PowerPlant';
import InformationTech from './pages/InformationTech'

import Agro from './pages/Agro';
import Sectors from './pages/Sectors';
import Aboutus from './pages/Aboutus';
import Education from './pages/Education';
import Petrol from './pages/Petrol';
import Health from './pages/Health';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Agro" element={<Agro />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Health" element={<Health />} />
      <Route path="/Petrol" element={<Petrol />} />

    </Routes> 
  </Router>
  <Footer/>
  </>
  
  )
}

export default App
