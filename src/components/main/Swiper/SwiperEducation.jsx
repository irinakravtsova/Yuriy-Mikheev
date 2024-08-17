import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
// import 'swiper/css';
// import './SwiperEducation.css'

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
          <div  className='education-item'>

         
          <img src={E1} alt="" />
          <img src={E2} alt="" />
       
              <p className='education-title'>Психолог, кандидат психологических наук - </p>
              <p className='education-text'>
                Санкт-Петербургский Государственный Университет
              </p>
              {/* <p className='education-text'>
                Закончил, защитил диссертацию и 9 лет преподавал в Санкт-Петербургском Государственном Университете, Факультет Психологии
              </p>             */}
           
          
              </div>
         </SwiperSlide>
        <SwiperSlide>
          <img src={E3} alt="" />
           <p className='education-title'>
               Сертифицированный гештальт-терапевт - </p>
              <p className='education-text'>
                ИИГТ (Санкт-Петербург),
              </p>
              <p className='education-text'>
              Мифологическое мышление, полярности картины мира и метафоры жизни, Елена Петрова и Михаил Чегодаев
              </p>            
          </SwiperSlide>

          <SwiperSlide>
           {/* <img src={E4} alt="" /> */}
           <p className='education-title'>
              Сертифицированный бизнес-тренер - </p>
              <p className='education-text'>
              Experiential Learning, MTa Learning (UK)
              </p>                   
        </SwiperSlide>

        <SwiperSlide>
        <img src={E4} alt="" />
           <p className='education-title'>
                 Сертифицированный коуч - </p>
              <p className='education-text'>
                Certificate of Foundation of a Great Coaching: Enhanced Level. (USA)
              </p>
              <p className='education-text'>
                Учился коучингу у Девида Годсмита и Девида Питерсона (ex коучинг директор Google)
              </p>            
         </SwiperSlide>
       

     

        <SwiperSlide>
         
         <p className='education-title'>
            Фасилитатор командных сессий - </p>
            <p className='education-text'>
            Advanced Facilitator. Pinpoint Facilitation Limited (UK), Pinpoint Facilitator , Pinpoint Facilitation Limited (UK)
            </p>             
      </SwiperSlide>
       
        </div>
        
        
      </Swiper>
    </>
  );
}