import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/LandingPage/RightButtonsFolder/About.jsx';
import Contact from './components/LandingPage/RightButtonsFolder/Contact.jsx';
import Home from './components/LandingPage/RightButtonsFolder/Home.jsx';
import Portfolio from './components/LandingPage/RightButtonsFolder/Portfolio.jsx';
import Skills from './components/LandingPage/RightButtonsFolder/Skills.jsx';
import LandingPage from './components/LandingPage/index.jsx';

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}