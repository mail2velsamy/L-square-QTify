import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './Carousal.module.css';

import LeftArrow from './LeftArrow ';
import RightArrow from './RightArrow';


const Carousel = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item}
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"><LeftArrow /></div>
      <div className="swiper-button-next"><RightArrow /></div>
    </Swiper>
  );
};

export default Carousel;
