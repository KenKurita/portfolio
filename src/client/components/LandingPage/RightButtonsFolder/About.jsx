import React from 'react';
import './aboutStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import WorkIcon from '@mui/icons-material/Work';
import RightButtons from './index.jsx';



export default function About(props) {
  const percentage = 66;
  return (
    <div>
      <h1><span>ABOUT &nbsp;</span> <span id="orange">ME</span></h1>
      <span class="span1">
        <div class="personalInfo">
          <h3>PERSONAL INFO</h3>
          <div class="table">
            <div class="row">
              <div class="cell">First Name: </div> <div class="response">Ken</div>
              <div class="cell">Last Name: </div><div class="response">Kurita</div>
            </div>
            <div class="row">
              <div class="cell">Age:</div><div class="response">27</div>
              <div class="cell">Nationality: </div><div class="response">White</div>
            </div>
            <div class="row">
              <div class="cell">Freelance: </div><div class="response">Available</div>
              <div class="cell">Address: </div><div class="response">San Francisco Bay Area, CA</div>
            </div>
            <div class="row">
              <div class="cell">Phone:  </div><div class="response">(209) 404-3734</div>
              <div class="cell">Languages: </div><div class="response">English</div>
            </div>
          </div>
        </div>
        <div class="boxy">
          <div class="container">
            <div class="box"><div class="boxNum" id="orange">12+</div>BS in Finance</div>
            <div class="box"><div class="boxNum" id="orange">2+</div>Start-ups</div>
            <div class="box"><div class="boxNum" id="orange">3+</div>Boats</div>
            <div class="box"><div class="boxNum" id="orange">1+</div>Hoes</div>
          </div>
        </div>
      </span>

      <div>
        <h2>MY SKILLS</h2>
        <div class="containerSkill skills">
          <div class="box2"><CircularProgressbar value={100} text={`${100}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />Javascript</div>
          <div class="box2"><CircularProgressbar value={100} text={`${100}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />React</div>
          <div class="box2"><CircularProgressbar value={75} text={`${75}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />Express</div>
          <div class="box2"><CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030', backgroundColor: '#3e98c7' })} />Node.js</div>
          <div class="box2"><CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />HTML</div>
          <div class="box2"><CircularProgressbar value={50} text={`${50}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />CSS</div>
          <div class="box2"><CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />MySQL</div>
          <div class="box2"><CircularProgressbar value={65} text={`${65}%`} styles={buildStyles({ pathColor: 'orange', textColor: 'orange', trailColor: '#303030' })} />MongoDB</div>
        </div>
      </div>
      <div>
        <h2>EXPERIENCE & EDUCATION</h2>
        <div class="container3">
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div>
          </div><div id="orange">PROJECT MANAGER</div>
          Feb 2018 - PRESENT<div class="box3box">
          <br/>Overseeing lighting projects, from planning and design while collaborating with distributors, architects, and contractors to develop detailed project plans.</div></div>
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div>
          </div><div id="orange">CERTIFICATE - HACKREACTOR</div><br/><div class="box3box">
          Full-stack javascript bootcamp done part-time averaging 20+ hours per week in addition to a full-time job at ALR</div></div>
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div>
          </div><div id="orange">FINANCIAL ANALYST & SALES OPERATIONS</div>Feb 2018 - Dec 2018<div class="box3box">
          <br/> Built Salesforce as single admin, engaged with new and existing customers via cold-calling and exhibitions, created marketing collateral from research department</div></div>
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div></div>
          <div id="orange">BS IN FINANCE - SAN JOSE STATE UNIVERSITY</div><br/>3.6 Cummulative GPA <br/> Investment Club</div>
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div>
          </div><div><div id="orange">INVESTMENT ANALYST</div><br/> Jan 2016 - Jun 2017</div><br/>
          <div class="box3box">Investments: Sano, DeepGram, Affectiva, MailTime</div></div>
          <div class="box3"><div class="circle"><WorkIcon sx={{ fontSize: 45, color: 'white' }} /> <div class="line"></div></div>
          <div id="orange">AA IN BUSINESS - LAS POSITAS COMMUNITY COLLEGE</div><br/>3.9 Cummulative GPA <br/> Swim Team, Student Union</div>
        </div>
      </div>
      <div className='rightButtons'>
        <RightButtons />
      </div>
    </div>
  )
};

