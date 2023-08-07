import React from 'react';
import './index.css';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import { Outlet, Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import './index.css'; // Import your CSS file

export default function LandingPageRightButtons(props) {
  return (
    <div className="buttons-container">

      <Link to="/"><div className="nav-circle"><HomeIcon sx={{ fontSize: 45, color: 'white' }} /></div></Link>
      <Link to="/about"><div className="nav-circle"><PersonIcon sx={{ fontSize: 45, color: 'white' }} /></div></Link>
      <Link to="/portfolio"><div className="nav-circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /></div></Link>
      <Link to="/contact"><div className="nav-circle"><EmailIcon sx={{ fontSize: 45, color: 'white' }} /></div></Link>
    </div>
  );
}
