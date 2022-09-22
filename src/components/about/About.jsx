import React from 'react'
import './About.css'
import ME from '../../assets/PXL_20220701_095446554.PORTRAIT.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {CgGames} from 'react-icons/cg'

const About = () => {
  return (
    <section id="about">

      <h5>Get to Nkow</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            
            <article className='about_card'>
              <FaAward className='about_icon'/>
              
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>

            <article className='about_card'>
              <CgGames className='about_icon'/>
              <h5>Games</h5>
              <small>10+ Completed</small>
            </article>
            
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas laudantium fugiat nobis temporibus doloremque rem natus iusto ducimus in, provident saepe tenetur, sapiente asperiores commodi sit labore possimus quibusdam.
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About