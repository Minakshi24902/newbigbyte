import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/Home"


import Sectors from './pages/Sectors';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/sectors" element={<Sectors />} />

    </Routes>
  </Router>
  <Footer/>
  </>
  
  )
}

export default App
