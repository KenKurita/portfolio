import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RightButtons from './index.jsx';
import MapIcon from '@mui/icons-material/Map';
import DraftsIcon from '@mui/icons-material/Drafts';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import $ from 'jquery';
import './contact.css';

export default function Contact(props) {
  const [name, setName] = useState('NAME');
  const [email, setEmail] = useState('EMAIL');
  const [subject, setSubject] = useState('SUBJECT');
  const [message, setMessage] = useState('MESSAGE');
  const [phone, setPhone] = useState('PHONE #');

  function sendMessage(e) {
    e.preventDefault()
    const data = { service_id: 'service_ifsexvs', template_id: 'template_ucuxej1', user_id: 'rXhqeo90gRIuOc5K1', template_params: { sendName: name, sendEmail: email, sendPhone: phone, sendSubject: subject, sendMess: message } };
    let x = '';
    setName('NAME')
    setEmail('EMAIL')
    setSubject('SUBJECT')
    setMessage('MESSAGE')
    setPhone('PHONE #')

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      alert('Your mail is sent!');
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  }


  return (
    <div >
      <div className='pageContainer'>
      <h1 className="contactHeader">CONTACT&nbsp;<div className="orange">ME</div></h1>
      <span>
        <div className="contactText">
          <div>DONT BE SHY!</div><br />

          <div> Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</div><br />

          <span >
          <MapIcon sx={{ fontSize: 45, color: 'orange', paddingRight:'8%' }} />
            <div><div style={{color: "#9e9c9c"}}>ADDRESS POINT</div> San Leandro, CA 94578</div>
          </span><br />

          <span >
          <DraftsIcon sx={{ fontSize: 45, color: 'orange', paddingRight:'8%' }} />
            <div><div style={{color: "#9e9c9c"}}>MESSAGE ME</div>kenivankurita@gmail.com</div>
          </span><br />

          <span >
          <ContactPhoneIcon sx={{ fontSize: 45, color: 'orange', paddingRight:'8%'}} />
            <div><div style={{color: "#9e9c9c"}}>CALL ME</div>(209) 404-3734</div>
          </span>

        </div>
          <form className="contact-form" action="#" method="post" onSubmit={sendMessage}>
            <div className="input-group">
              <input type="text" id="name" name="name" value={name} required onChange={e => setName(e.target.value)} />
              <input type="email" id="email" name="email" value={email} required onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="text" id="subject" name="subject" value={subject} required onChange={e => setSubject(e.target.value)} />
              <input type="phone" id="phone" name="phone" value={phone} required onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="input-group">
              <textarea id="message" name="message" rows="4" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit">Send</button>
          </form>

      </span>
      </div>
      <div className='rightButtons'>
        <RightButtons />
      </div>
    </div>
  )
};