import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter as Router,
  
  } from "react-router-dom";

import HomePage from '../Pages/HomePage';
import Footer from '../Components/Generales/Footer';
import NavBar1 from '../Components/Generales/NavBar1';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import ServicesPage from '../Pages/ServicesPage';

const Routing = () => {
  return (
    <Router>
        <NavBar1/>
        <Routes> 
            <Route path='/' element={<HomePage/>}/>
            <Route path='sobre-nosotros' element={<AboutPage/>}/>
            <Route path='contacto' element={<ContactPage/>}/>
            <Route path='servicios' element={<ServicesPage/>}/>
        </Routes>

        <Footer/>
    </Router>
  )
}

export default Routing