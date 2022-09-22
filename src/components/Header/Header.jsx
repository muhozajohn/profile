import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/ME.png';
import './Header.css'
const Header = () => {
  return (
    <header>


      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>The Saint</h1>
        <h5 className="text-light">FullStacker Developer</h5>
        <CTA />
       <HeaderSocials />
        <a href="#contact" className='scroll_down'> scroll down</a>
        <div className="me">
         
          <img src={ME} alt="me" />
          
         
        </div>
      </div>


    </header>
  )
}

export default Header