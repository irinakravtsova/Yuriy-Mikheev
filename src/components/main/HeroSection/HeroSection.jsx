import React from 'react'
import './HeroSection.css'
import InfoBox from '../InfoBox/InfoBox';
import ImageBox from '../ImageBox/ImageBox';
import Brand from '../Brand/Brand';
import FirstConsultation from '../FirstСonsultation/FirstConsultation';


function HeroSection() {
  return (
   <div className='hero'>
    <div className='container'>
       <div className='hero__inner'>
         <InfoBox />  
         <ImageBox />     

        </div>
        <div className='brend-box'>
          <Brand
            isClass = {'brend'}
            text = 'Помощь с заботой и уважением' />
          <FirstConsultation /> 
        </div>  
          
       </div>
    </div>

 
  );
}

export default HeroSection;
