import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './AboutMe.css';

export default function AboutMe(props) {


  return (
    <div className="about_me_body ">
    <Link to='about' style={{outline:'none', apperance:'none'}}>
      <button className="button_slide slide_right button"><div className='button_circle'><i className="fas fa-arrow-right right_arrow"></i></div><span>MORE ABOUT ME</span> </button>
    </Link>
  </div>
  )
}