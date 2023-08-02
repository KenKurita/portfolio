import React, {useEffect, useState} from 'react';
import AboutMe from './AboutMe.jsx';
import RightButtons from './RightButtonsFolder/index.jsx';
import './index.css';


export default function LandingPage(props) {
  return (
    <div>
      <div className='orangeThing'>
        <img className='landingImg' src={'https://i.ibb.co/xS5YjJb/IMG-4360-Medium.png'}></img>
      </div>
      <div className='landingText'>
        <div className= 'orange'>
        -- I'm Ken Kurita.
        </div>
        <div >
          Software Engineer
        </div>
        <AboutMe/>
      </div>
      <div className='rightButtons'>
          <RightButtons/>
      </div>
    </div>
  )
}