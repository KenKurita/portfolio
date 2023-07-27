import React, {useState, useEffect} from 'react';

export default function AboutMe(props) {

  function clickMe() {
    console.log('butt stuff')
  }
  return (
    <button onClick={clickMe} style={{backgroundColor: 'orange', color: 'white', fontSize:'40px'}}>
      MORE ABOUT ME
    </button>
  )
}