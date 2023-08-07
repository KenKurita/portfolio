import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function AboutMe(props) {


  return (

    <Link style={{ backgroundColor: 'black', color: '#9e9c9c', fontSize: '20px', textDecoration: 'none' }} to='about'>
      <button style={{ backgroundColor: 'black', border: '1px solid orange', color: '#9e9c9c', fontSize: '20px' }}>MORE ABOUT ME </button>
    </Link>
  )
}