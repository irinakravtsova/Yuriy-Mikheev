import React from 'react'

import './ServicesSection.css'
import Heading from '../../Heading/Heading';

import Picture1 from '../../../assets/выход из подавленности.svg'
import Picture2 from '../../../assets/горе.jpg'
import Picture3 from '../../../assets/семья.jpg'
import Picture4 from '../../../assets/жизнь.svg'
import Picture5 from '../../../assets/танго в троем.svg'
import Picture6 from '../../../assets/изменения.jpg'
import ServicesCard from '../ServicesCard/ServicesCard';
import SwiperServices from '../Swiper/SwiperServices';


const services =[
  {
    title: 'ТРЕВОЖНЫЕ И/ИЛИ ПОДАВЛЕННЫЕ СОСТОЯНИЯ',
    image:Picture1,
  },
  {
    title: 'РАБОТА С ГОРЕМ И ТРАВМОЙ',
    image:Picture2,
  },
  {
    title: 'ОТНОШЕНИЯ В СЕМЬЕ И СОЦИУМЕ',
    image:Picture3,
  },
  {
    title: 'СИМПТОМЫ, ВЛИЯЮЩИЕ НА ЖИЗНЬ',
    image:Picture4,
  },
  {
    title: 'СОЗАВИСИМЫЕ ОТНОШЕНИЯ',
    image:Picture5,
  },
  {
    title: 'ПЕРЕЖИВАНИЕ ИЗМЕНЕНИЙ',
    image:Picture6,
  },
]


function ServicesSection(props) {
 
  return (
    <div className='services'>
      <Heading 
        level = 'h2'
        text ='Чем могу помочь' />

      < SwiperServices />

      {/* { services.map(service => (
        <ServicesCard 
          title={service.title}
          image={service.image}
         />
      ))} */}
  
    </div>   
  );
}

export default ServicesSection;