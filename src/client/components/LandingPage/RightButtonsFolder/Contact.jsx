import React from 'react';
import './contact.css';

export default function Contact(props) {
  return (
    <div>
      <h1>CONTACT&nbsp;<div class="orange">ME</div></h1>
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
    <form action="#" method="post">
        <input type="text" id="name" name="name" value="YOUR NAME" required/>
        <br/>

        <input type="email" id="email" name="email" value="YOUR EMAIL" required/>
        <br/>

        <input type="text" id="subject" name="subject" value="YOUR SUBJECT" required/>
        <br/>

        <textarea id="message" name="message" rows="4" required value="YOUR MESSAGE"></textarea>
        <br/>

        <input type="submit" value="Send"/>
    </form>
    </span>
    </div>
  )
};