import React from 'react'
import './AboutMe.css'
import InfoBox from '../../main/InfoBox/InfoBox';
import ImageBox from '../../main/ImageBox/ImageBox';

import Banana from '../../../assets/hero-photo.png'




function AboutMe() {
  return (
   <section className='section'>
    <div className='container'>
       <div className='section-wrapper'>
         <ImageBox 
          image= {Banana}/>           
         <InfoBox />     
        </div>                  
       </div>
    </section> 
  );
}

export default AboutMe;
