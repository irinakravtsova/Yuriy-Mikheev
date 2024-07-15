import React from 'react'

import './ServicesSection.css'
import Heading from '../../Heading/Heading';
import SwiperServices from '../../main/Swiper/SwiperServices';


// const services =[
//   {
//     title: 'ТРЕВОЖНЫЕ И/ИЛИ ПОДАВЛЕННЫЕ СОСТОЯНИЯ',
//     image:Picture1,
//   },
//   {
//     title: 'РАБОТА С ГОРЕМ И ТРАВМОЙ',
//     image:Picture2,
//   },
//   {
//     title: 'ОТНОШЕНИЯ В СЕМЬЕ И СОЦИУМЕ',
//     image:Picture3,
//   },
//   {
//     title: 'СИМПТОМЫ, ВЛИЯЮЩИЕ НА ЖИЗНЬ',
//     image:Picture4,
//   },
//   {
//     title: 'СОЗАВИСИМЫЕ ОТНОШЕНИЯ',
//     image:Picture5,
//   },
//   {
//     title: 'ПЕРЕЖИВАНИЕ ИЗМЕНЕНИЙ',
//     image:Picture6,
//   },
// ]


function ServicesSection() {
 
  return (
    <section className='services section'>
      <Heading 
        level = 'h2'
        isClassTitle = 'services-title'
        title ='Чем могу помочь' />
        <div className='services-wrapper'>
         < SwiperServices />
        </div>  
    </section>   
  );
}

export default ServicesSection;