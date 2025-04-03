"use client"
import './hero.css'
import React from 'react'
import { useEffect,useRef,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Hero() {
  return (
    <div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container mx-auto px-4"
      >
        <SwiperSlide className='h-7 w-full' id='sl1'></SwiperSlide>
        <SwiperSlide id='sl2' ></SwiperSlide>
        <SwiperSlide id='sl3'></SwiperSlide>
        <SwiperSlide id='sl4'></SwiperSlide>
        <SwiperSlide id='sl5'></SwiperSlide>
        <SwiperSlide id='sl6'></SwiperSlide>
       
      </Swiper>   
    </div>
  )
}

export default Hero
