import React from 'react'
import CLIENT1 from '../../assets/PXL_20220323_141251162.PORTRAIT.jpg'
import CLIENT2 from '../../assets/IMG_20220830_150700.jpg'
import CLIENT3 from '../../assets/PXL_20220718_103209336.PORTRAIT~2.jpg'
import CLIENT4 from '../../assets/PXL_20220828_093702538.PORTRAIT.jpg'
import CLIENT5 from '../../assets/IMG_20220830_150424.jpg'
import CLIENT6 from '../../assets/wasa-crispbread-Xlo7N1ctmZc-unsplash.jpg'
import './Testimonials.css'


// import Swiper core and required modules
import {Navigation,Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data =[
{
  avatar: CLIENT1,
  name: 'Muhoza John',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT2,
  name: 'Birori Robert',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT3,
  name: 'Rushengura Steven',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT4,
  name: 'Uwanziga Faith',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT4,
  name: 'NetFort',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT5,
  name: 'keffa',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},
{
  avatar: CLIENT6,
  name: 'Falz The Great',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.'
},]


const Testimonials = () => {
  return (
  
    <section id='testimonials'>
        <h5>Review from Client</h5>
        <h2>Testimonials</h2>

        <Swiper className="container tesimonials_container" 
        
              // install Swiper modules
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >

          {
            data.map(({avatar,name,review},index) =>{
              return(

              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt=""/>
                  </div>
                  <h5 className='client_name'>{name}</h5>
                  <small className="client_review">
                    {review}
                  </small>
              </SwiperSlide>

              )
            })
          }
       

          {/* <article className="testimonial">
            <div className="client_avatar">
              <img src={CLIENT1} alt="avatar one" />
              </div>
              <h5 className='client_name'>Enerst Achiver</h5>
              <small className="client_review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.
              </small>
          </article>

          <article className="testimonial">
            <div className="client_avatar">
              <img src={CLIENT1} alt="avatar one" />
              </div>
              <h5 className='client_name'>Enerst Achiver</h5>
              <small className="client_review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.
              </small>
          </article>

          <article className="testimonial">
            <div className="client_avatar">
              <img src={CLIENT1} alt="avatar one" />
              </div>
              <h5 className='client_name'>Enerst Achiver</h5>
              <small className="client_review">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim odit, fugiat est dolorum dolorem velit debitis veritatis recusandae reiciendis deserunt architecto voluptatem! Laudantium, harum sapiente. Natus eum veritatis velit.
              </small>
          </article>
           */}

          
        </Swiper>

    

    </section>
  )
}

export default Testimonials