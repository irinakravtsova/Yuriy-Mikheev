import React from 'react'
import './EducationSection.css'

import Heading from '../../Heading/Heading';
import SwiperServices from '../../main/Swiper/SwiperServices';
import SwiperEducation from '../../main/Swiper/SwiperEducation';


function EducationSection() {
 
  return (
    <section className='section education'>
      <Heading 
        level = 'h2'
        isClassTitle = 'services-title'
        title ='Моя квалификация' />
        <div className='education-wrapper'>
         < SwiperEducation />
        </div>  
   
    </section>
    
  );
}

export default EducationSection;