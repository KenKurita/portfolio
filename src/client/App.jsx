import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/LandingPage/RightButtonsFolder/About.jsx';
import Contact from './components/LandingPage/RightButtonsFolder/Contact.jsx';
import Portfolio from './components/LandingPage/RightButtonsFolder/Portfolio.jsx';
import LandingPage from './components/LandingPage/index.jsx';

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}