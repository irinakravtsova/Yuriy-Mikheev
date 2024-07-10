import React from 'react'
import './HeroSection.css'
import InfoBox from '../InfoBox/InfoBox';
import ImageBox from '../ImageBox/ImageBox';


function HeroSection() {
  return (
   <div className='hero'>
    <div className='container'>
       <div className='hero__inner'>
         <InfoBox />  
         <ImageBox />
      

        </div>
          
       </div>
    </div>

 
  );
}

export default HeroSection;
