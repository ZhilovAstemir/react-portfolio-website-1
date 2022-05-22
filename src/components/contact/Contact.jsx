import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vo4dvd', 'template_gay7bgg', form.current, '0F89Q6D0us-xbkTGw')

    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>artisticheski@gmail.com</h5>
              <a href="mailto:artisticheski@gmail.com" target="_blank">Send a message</a>
           </article>
           <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Facebook</h5>
              <a href="https://www.facebook.com/" target="_blank">Send a message</a>
           </article>
           <article className='contact__option'>
              <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+79565156115 </h5>
              <a href="https://api.whatsapp.com/send?phone=5165158618844" target="_blank">Send a message</a>
           </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your full name' required />
         <input type="email" name='email' placeholder='Your email' required/>
         <textarea name="message" rows="7" placeholder='Your massage' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact