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
<<<<<<< HEAD
import Telecom from './pages/Telecom';
import Tourism from './pages/Tourism'
=======
import Education from './pages/Education';
import Petrol from './pages/Petrol';
import Health from './pages/Health';
>>>>>>> 36bb1eec88aeb443048fb7f3553fa9ee20c19d00

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />}           />
      <Route path="/about" element={<About />}     />                             
      <Route path="/sectors" element={<Sectors />} />                  
      <Route path="/Aboutus" element={<Aboutus />} /> 
      <Route path="/PowerPlant" element={<PowerPlant />}    />  
      <Route path= "/Telecom" element={<Telecom />}   />   
      <Route path="/InformationTech" element={<InformationTech />} />  
      <Route path="/Tourism" element={<Tourism />}  />   
=======
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Agro" element={<Agro />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Health" element={<Health />} />
      <Route path="/Petrol" element={<Petrol />} />
>>>>>>> 36bb1eec88aeb443048fb7f3553fa9ee20c19d00

    </Routes> 
  </Router>
  <Footer/>
  </>
  
  )
}

export default App
