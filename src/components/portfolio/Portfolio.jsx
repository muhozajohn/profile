import React from 'react'
import PORT1 from '../../assets/PORT1.webp'
import PORT2 from '../../assets/PORT2.webp'
import PORT3 from '../../assets/PORT3.webp'
import PORT4 from '../../assets/PORT4.webp'
import PORT5 from '../../assets/PORT5.webp'
import PORT6 from '../../assets/PORT6.webp'
import './Portfolio.css'



const data = [
  {
    id: 1,
    Image: PORT1,
    title: 'Jeczone - Project Management Dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19318064-Jeczone-Project-Management-Dashboard'
  },
  {
    id: 2,
    Image: PORT2,
    title: 'Cecare - Clinic App for Doctor',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19309675-Cecare-Clinic-App-for-Doctor'
  },
  {
    id: 3,
    Image: PORT3,
    title: 'BAGS - Luxury Bag Market App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19318286-Sending-report-graphic-UI'
  },
  {
    id: 4,
    Image: PORT4,
    title: 'Free.Work ⁝ Job Finder Components | Dark Mode 🔎',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19316060-Free-Work-Job-Finder-Components-Dark-Mode'
  },
  {
    id: 5,
    Image: PORT5,
    title: 'Smart Home App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19287726-Smart-Home-App'
  },
  {
    id: 6,
    Image: PORT6,
    title: 'iPhone?',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19316253-iPhone'
  },
]
const Portfolio = () => {
  return (
    <section id="Portfolio">

      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,Image,title,github,demo}) =>{
            return(
                
          <article className='portfolio_item' key={id}>
              <div className="portfolio_item-image">
                  <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>live Demo</a>
              </div>
          </article>

            )
          })
        }


      </div>

    </section>
  )
}

export default Portfolio