import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Peview from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Alice Brown</h5>
          <small className='client__review'>
              Culpaem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore mollitia est porro! Voluptates, laudantium possimus quod accusamus nobis reprehenderit aspernatur quod voluptates voluptatum itaque ametonsectetur adipisicing elit autem!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Thaksin Shinawatra</h5>
          <small className='client__review'>
              Neque porem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eaque harum quidem, quasi tempore autem eaque, perspiciatis nam porro voluptas praesentium voluptate assumenda quod voluptates voluptatum itaque amet culpa autem nisi porro in!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Kogaddu Birappa Timappa Nair</h5>
          <small className='client__review'>
              Lorem eligendi et excepturi ipsum dolor sit amet consectetur adipisicing squam, eaque harum quidem, quasi tempore autem elit. Quibusdam earum fuga qui  autem eaque, perspiciatis nam porro voluptas praesentium voluptate assumenda quod voluptates facilis.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
        </div>
        <h5 className='client__name'>María José Carreño Quiñones</h5>
          <small className='client__review'>
              Autem veritatis aliquid ipsa odio tempore ipsum dolor sit amet consectetur adipisicing elit. Saepe, in cum aliquam explicabo ea accusamus  suscipit nemo squam, eaque harum quidem, quasi tempore autem odit deleniti! Eum adipisci reprehenderit quas tempora.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials