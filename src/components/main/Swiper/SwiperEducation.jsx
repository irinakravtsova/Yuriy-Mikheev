import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css';
import './SwiperEducation.css'

import E1 from '../../../assets/E1.jpg'
import E2 from '../../../assets/E2.jpg'
import E3 from '../../../assets/E3.jpg'
import E4 from '../../../assets/E4.jpg'


export default function SwiperEducation() {
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
          <img src={E1} alt="" />
          <p >Санкт-Петербургский Государственный Университет
Специальность: Психология
Квалификация: Психолог, Преподаватель психологии
Годы обучения: 1993 - 1998</p>
         </SwiperSlide>
        <SwiperSlide>
           <img src={E2} alt="" />
           <p>РАБОТА С ГОРЕМ И ТРАВМОЙ</p>
          </SwiperSlide>
        <SwiperSlide>
           <img src={E3} alt="" />
           <p>ОТНОШЕНИЯ В СЕМЬЕ И СОЦИУМЕ</p>
         </SwiperSlide>
        <SwiperSlide>
           <img src={E4} alt="" />
           <p>СИМПТОМЫ, ВЛИЯЮЩИЕ НА ЖИЗНЬ</p>
        </SwiperSlide>
       
        </div>
        
        
      </Swiper>
    </>
  );
}