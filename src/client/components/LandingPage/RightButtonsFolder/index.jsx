import React from 'react';
import Home from './Home.jsx'
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import { Outlet, Link } from "react-router-dom";


export default function LandingPageRightButtons(props) {


  return (

    <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='contact'>Contact</Link>
      <Link to='portfolio'>Portfolio</Link>
      <Link to='skills'>Skills</Link>
    </div>
  )
};