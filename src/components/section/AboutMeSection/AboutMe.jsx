import React from 'react'

import './AboutMe.css'

import InfoBox from '../HeroSection/HeroInfo/HeroInfo';
import ImageBox from '../../main/ImageBox/ImageBox';

import Banana from '../../../assets/hero-photo.png'
import Info from '../../main/Info/Info';




function AboutMe() {
  return (
   <section className='section aboutme'>
      <div className='section-wrapper'>
         <ImageBox 
            image= {Banana}
            isClassImage = 'hero-image'
            isAlt = 'Yuri Mickheev'/>           
         <Info
             isClassBox = {'hero-info'}
             level = 'h2'    
             title = 'Обо мне'
             isClassTextWrapper = 'aboutme__text-wrapper'
             isClassText = 'aboutme-text'
             text1 = 'Консультирую уже более 20 лет, кандидат психологических наук, применяю гештальт терапию и коучинг. Использую в работе только научно обоснованные методы и технологии.'       
             text2= 'Вижу целью свой работы - помочь повысить качество жизни человека, помочь справиться с тем, что делает жизнь хуже.'  
             text3= 'Я помогаю яснее увидеть и точнее понять мысли, чувства, реакции, которые вызывают страдания или проблемы. А потом придумать как найти в себе силы поменять то, что мешает на то, что помогает жить лучше.'  
             text4= 'Уверен, что поддержка и человеческое понимание очень важны на пути изменений, поэтому много уделяю времени и внимания созданию помогающих отношений с клиентом.'  
             />     
      </div> 
    </section> 
  );
}

export default AboutMe;
