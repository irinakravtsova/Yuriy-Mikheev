import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';
import './SwiperServices.css'

import Picture1 from '../../../assets/image1.png'
import Picture2 from '../../../assets/горе.jpg'
import Picture3 from '../../../assets/семья.jpg'
import Picture4 from '../../../assets/жизнь.svg'
import Picture5 from '../../../assets/танго в троем.svg'
import Picture6 from '../../../assets/изменения.jpg'

export default function SwiperServices() {
  return (
    <>
     <Swiper
       slidesPerView={2}
       spaceBetween={50} 
       navigation={true} modules={[Navigation]} 
       className="mySwiper"      
       >
        <div>
        <SwiperSlide>
          <img src={Picture1} alt="" />
          <p className='text-slider'>Тревожные и/или подавленные состояния</p>
         </SwiperSlide>
        <SwiperSlide>
           <img src={Picture2} alt="" />
           <p>РАБОТА С ГОРЕМ И ТРАВМОЙ</p>
          </SwiperSlide>
        <SwiperSlide>
           <img src={Picture3} alt="" />
           <p>ОТНОШЕНИЯ В СЕМЬЕ И СОЦИУМЕ</p>
         </SwiperSlide>
        <SwiperSlide>
           <img src={Picture4} alt="" />
           <p>СИМПТОМЫ, ВЛИЯЮЩИЕ НА ЖИЗНЬ</p>
        </SwiperSlide>
        <SwiperSlide>
           <img src={Picture5} alt="" /> 
           <p>СОЗАВИСИМЫЕ ОТНОШЕНИЯ</p>
          </SwiperSlide>
        <SwiperSlide>
        <img src={Picture6} alt="" />
        <p>ПЕРЕЖИВАНИЕ ИЗМЕНЕНИЙ</p>
         </SwiperSlide>
        </div>
        
        
      </Swiper>
    </>
  );
}