import React from 'react'

import './AboutMe.css'

import InfoBox from '../HeroSection/HeroInfo/HeroInfo';
import ImageBox from '../../main/ImageBox/ImageBox';

import Component from '../../../assets/Component 1.jpg'
import Info from '../../main/Info/Info';




function AboutMe() {
  return (
   <section className='section aboutme'
              id='about'>
      <div className='section-wrapper aboutme-wrapper'>
         <ImageBox 
            image= {Component}
            isClassImage = 'aboutme-image'
            isAlt = 'Yuri Mickheev'/> 

        <div className='aboutme-info'>
          <h2 className='aboutme-title'>
          Обо мне
          </h2>
          <Info
            //  isClassBox = {'aboutme-info'}
            //  level = 'h2' 
            //  isClassTitle = 'aboutme-title'   
            //  title = 'Обо мне'
             isClassTextWrapper = 'aboutme__text-wrapper'
             isClassText = 'aboutme-text'
             cls = 'bold'
             text1 = 'Консультирую уже более 20 лет, кандидат психологических наук, применяю гештальт терапию и коучинг. Использую в работе только научно обоснованные методы и технологии.'       
             text21= 'Вижу целью свой работы - помочь повысить качество жизни человека, помочь справиться с тем, что делает жизнь хуже.'  
             text2= 'Вижу целью свой работы - помочь тем, кто задумывается:  '  
             text31= 'Я помогаю яснее увидеть и точнее понять мысли, чувства, реакции, которые вызывают страдания или проблемы. А потом придумать как найти в себе силы поменять то, что мешает на то, что помогает жить лучше.' 
             text22=' - а какого фига я постоянно в суете и тревоге, расслабиться не удается даже на отдыхе?'
             text3= ' - что мешает мне жить легко и счастливо? '  
             text4= 'Я помогаю увидеть какие мысли, чувства и реакции приводят к проблемам и страданиям, а потом понять что с этим делать, чтобы поменять.' 
             text5='Уверен, что поддержка и человеческое понимание очень важны на пути изменений, поэтому много уделяю времени и внимания созданию помогающих отношений с клиентом.' 
             text6='В этом мне помогают мой опыт и моя квалификация.' 

             />

          {/* <div className='practice'>
              <h3 className='course-text'>Мой опыт:</h3>
              <ul>
                <li className='aboutme-text'>
                20+ лет психологического консультирования по личным и профессиональным вопросам,
                </li>
                <li className='aboutme-text'>
                а параллельно с этим коучинг руководителей крупнейших международных и компаний РФ (Яндекс, Beeline, Tele 2, Ростелеком, ПСБ, Газпром, Газпром Нефть, Сбербанк, Danone, Hochland, Nestle, Nokian Tyres, Enel, Tom Tailor, Beiersdorf, Kоmatsu, Honda, Toyota, International Paper, ...)
                </li>
                <li className='aboutme-text'>
                и даже обучение корпоративных коучей
                </li>
              </ul>
              </div>   */}
          </div>          
      

             
      </div> 
     
    </section> 
  );
}

export default AboutMe;
