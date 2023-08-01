import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './contact.css';

export default function Contact(props) {
   const [name , setName] = useState('NAME');
   const [email, setEmail] = useState('EMAIL');
   const [subject, setSubject] = useState('SUBJECT');
   const [message, setMessage] = useState('MESSAGE');
   const [phone, setPhone] = useState('PHONE #');

  function sendMessage(e) {
    e.preventDefault()
    const data = {sendName: name, sendEmail: email, sendPhone: phone, sendSubject: subject, sendMess: message};
    let x = '';
    setName('NAME')
      setEmail('EMAIL')
      setSubject('SUBJECT')
      setMessage('MESSAGE')
      setPhone('PHONE #')
    axios.post('/contactMe', {data})
    .then((response) => {
      alert('Message successfully sent!')
    })
    .catch((err) => {
      if (err) {
        console.log(err, 'error inside contactMe Client')
      }
    })
  }


  return (
    <div>
      <h1>CONTACT&nbsp;<div className="
      orange">ME</div></h1>
    <span>
      <div>
        <div>DONT BE SHY!</div><br/>

        <div> Feel free to get in touch with me. I am always open <br/> to discussing new projects, creative ideas or
         <br/>opportunities to be part of your visions.</div><br/>

        <div>
          <div>ADDRESS POINT</div>
          San Leandro, CA 94578
        </div><br/>

        <div>
          <div>MESSAGE ME</div>
          kenivankurita@gmail.com
        </div><br/>

        <div>
          <div>CALL ME</div>
          (209) 404-3734
        </div>

      </div>
    <form action="#" method="post" onSubmit={sendMessage}>
      <label>
        <input type="text" id="name" name="name" value={name} required onChange={e=> setName(e.target.value)}/>
        <br/>

        <input type="email" id="email" name="email" value={email} required onChange={e=> setEmail(e.target.value)}/>
        <br/>

        <input type="phone" id="phone" name="phone" value={phone} required onChange={e=> setPhone(e.target.value)}/>
        <br/>

        <input type="text" id="subject" name="subject" value={subject} required onChange={e=> setSubject(e.target.value)}/>
        <br/>

        <textarea id="message" name="message" rows="4" value={message} onChange={e=> setMessage(e.target.value)}></textarea>
        <br/>

        <button type="submit">Send</button>
      </label>
    </form>
    </span>
    </div>
  )
};