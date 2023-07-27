import React, {useEffect, useState} from 'react';
import AboutMe from './AboutMe.jsx';
import RightButtons from './RightButtonsFolder/index.jsx';


export default function LandingPage(props) {
  return (
    <div>
    <div style={{width: '100%', height: '1080px', backgroundColor:'black'}}>
      <div style={{width: '15%', height: '0', borderBottom: '1080px solid orange', borderRight: '200px solid transparent'}}>
        <img style={{width: '600px', height: '800px', margin: '30%', borderRadius:'30px'}} src={'https://images.unsplash.com/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'}></img>
      </div>
      <div style={{fontSize: '80px', right: '15%', top: '35%', color:'white', position: 'absolute'}}>
        <div style={{color: 'orange'}}>
        -- I'm Ken Kurita.
        </div>
        <div >
          Software Engineer
        </div>
        <AboutMe/>
      </div>
    </div>
    <div style={{ right: '2%', top: '40%', display: 'flex', flexDirection: 'column', position: 'fixed', alignItems: 'flex-end' }}>
        <RightButtons/>
    </div>
    </div>
  )
}