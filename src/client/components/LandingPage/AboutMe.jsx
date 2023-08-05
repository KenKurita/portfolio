import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

export default function AboutMe(props) {


  return (
    <button style={{backgroundColor: 'orange', color: 'white', fontSize:'40px'}}>
      <Link style={{backgroundColor: 'orange', color: 'white', fontSize:'40px', textDecoration: 'none'}}to='about'>MORE ABOUT ME</Link>
    </button>
  )
}