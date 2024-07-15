import React from 'react'
import './EducationSection.css'

import Heading from '../../Heading/Heading';
import SwiperServices from '../../main/Swiper/SwiperServices';


function EducationSection() {
 
  return (
    <section className='section education'>
      <Heading 
        level = 'h2'
        isClassTitle = 'services-title'
        title ='Моя квалификация' />
        <div className='education-wrapper'>
         < SwiperServices />
        </div>  
   
    </section>
    
  );
}

export default EducationSection;