import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function LandingPageRightButtons(props) {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="buttons-container">
      <Link to="/" className="nav-circle">
          <span className="icon">
            <HomeIcon />
          </span>
          <span class="text">HOME</span>
      </Link>
      <Link to="/about" className="nav-circle">
          <span className="icon">
            <PersonIcon />
          </span>
          <span class="text">ABOUT</span>
      </Link>
      <Link to="/portfolio" className="nav-circle">
          <span className="icon">
            <WorkIcon />
          </span>
          <span class="text">PORTFOLIO</span>
      </Link>
      <Link to="/contact" className="nav-circle">
          <span className="icon">
            <EmailIcon />
          </span>
          <span class="text">CONTACT</span>
      </Link>
    </div>
  );
}

