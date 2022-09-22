import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>CONTACT ME</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icons'/>
            <h4>Email</h4>
            <h5>muhozajohn4@gmail.com</h5>
            <a href="mailto:muhozajohn250@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icons'/>
            <h4>Mensenger</h4>
            <h5>The Saint Works</h5>
            <a href="https://m.me/mjohn" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icons'/>
            <h4>Whatsapp</h4>
            <h5>+250 785 161 508</h5>
            <a href="https://api.whatsapp.com/send?phone+250785161508" target='_blank'>Send a message</a>
          </article>

        </div>

        {/* End of Conact options */}
        <form action="">
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="mesage"  rows="7" placeholder='Your Message' required></textarea>
            <button className='btn btn-primary'>Send Message</button>
          
        </form>
        

      </div>
    </section>
  )
}

export default Contact