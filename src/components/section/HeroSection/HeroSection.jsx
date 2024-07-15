import React from 'react'
import './HeroSection.css'

import ImageBox from '../../main/ImageBox/ImageBox';
import Banana from '../../../assets/hero-photo.png'
import HeroInfo from './HeroInfo/HeroInfo';

function HeroSection() {
  return (
   <section className='section hero'>  
       <div className='section-wrapper'>
         <HeroInfo
          isClassBox = {'hero-info'}
          level = 'h1'    
          title = 'Я помогаю вам'
          isClassSubtitle={'hero-subtitle'}
          subtitle= 'повысить качество вашей жизни'
         />  
         <ImageBox 
          image= {Banana}
          isClassImage = 'hero-image'
          isAlt = 'Yuri Mickheev' />  
        </div>                  
  </section>

 
  );
}

export default HeroSection;
