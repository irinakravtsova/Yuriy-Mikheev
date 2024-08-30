import React from 'react'
import './EducationSection.css'

import Heading from '../../Heading/Heading';
import SwiperServices from '../../main/Swiper/SwiperServices';
import SwiperEducation from '../../main/Swiper/SwiperEducation';
import E1 from '../../../assets/E1.jpg'
import E2 from '../../../assets/E2.jpg'
import E3 from '../../../assets/E3.jpg'
import E4 from '../../../assets/E4.jpg'


function EducationSection() {
 
  return (
    <section className='section education'>
      <div className='education__box'>
      <div className='education__box-right'>
              <div className='practice'>
                  <h3 className='education-title-h2'>Мой опыт</h3>
                  <ul className='prctice__info'>
                    <li className='education-text'>
                    20+ лет психологического консультирования по личным и профессиональным вопросам,
                    </li>
                    <li className='education-text'>
                    а параллельно с этим коучинг руководителей крупнейших международных и компаний РФ (Яндекс, Beeline, Tele 2, Ростелеком, ПСБ, Газпром, Газпром Нефть, Сбербанк, Danone, Hochland, Nestle, Nokian Tyres, Enel, Tom Tailor, Beiersdorf, Kоmatsu, Honda, Toyota, International Paper, ...)
                    </li>
                    <li className='education-text'>
                    и обучение корпоративных коучей
                    </li>
                  </ul>
                  </div>  
              </div>  
        <div className='education__box-left'>    
          <h2 className='education-title-h2'>Моя квалификация</h2>
              
          <div className='education__inner'>
    
           <ul className='education-wrapper'>
          
             
            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Психолог, кандидат психологических наук </p>
                  <p className='education-text '>
                        Санкт-Петербургский Государственный Университет
                      </p> 
                  <p className='education-text'>
                  Закончил, защитил диссертацию и 9 лет преподавал в Санкт-Петербургском Государственном Университете, Факультет Психологии
                  </p>  
              </div>                            
            </li>
    
            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Сертифицированный гештальт-терапевт </p>
                  <p className='education-text '>
                  ИИГТ (Санкт-Петербург)</p> 
                  <p className='education-text'>
                  Мифологическое мышление, полярности картины мира и метафоры жизни, Елена Петрова и Михаил Чегодаев</p> 
              </div>                            
            </li>
        
            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Сертифицированный коуч -  учился коучингу у Девида Годсмита и Девида Питерсона (ex коучинг директор Google) </p>
                  <p className='education-text'>
                  Certificate of Foundation of a Great Coaching: Enhanced Level. (USA), Agile Couching Professional, Scrum track (Москва), Accelerating Coaching Experience, Journey to Mastery, WBECS (USA), Accelerating Coaching Experience. WBECS (USA), Coaching in organization and business. Core competencies of professional coaching, ICA (Москва), MBTI® Certified Ernst & Yung (UK)
                  </p>  
              </div>                            
            </li>
            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Сертифицированный бизнес-тренер </p>
                  <p className='education-text'>
                  Experiential Learning, MTa Learning (UK)
                  </p>  
              </div>                            
            </li>

            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Фасилитатор командных сессий </p>
                  <p className='education-text'>
                  Advanced Facilitator. Pinpoint Facilitation Limited (UK), Pinpoint Facilitator , Pinpoint Facilitation Limited (UK)
                  </p>  
              </div>
                            
            </li>

        
          </ul>
          </div> 
          </div> 
          
              
            
              </div> 
    </section>
    
  );
}

export default EducationSection;