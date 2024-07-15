import React from 'react'
import './HeroSection.css'
import InfoBox from '../../main/InfoBox/InfoBox';
import ImageBox from '../../main/ImageBox/ImageBox';
import Banana from '../../../assets/hero-photo.png'



function HeroSection() {
  return (
   <section className='section'>
    <div className='container'>
       <div className='section-wrapper'>
         <InfoBox
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
                  
       </div>
    </section>

 
  );
}

export default HeroSection;
