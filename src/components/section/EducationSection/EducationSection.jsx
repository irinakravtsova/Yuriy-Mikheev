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
      <h2 className='education-title-h2'>Моя квалификация</h2>
      {/* <Heading 
        level = 'h2'
        isClassTitle = 'services-title'
        title ='Моя квалификация' /> */}

        {/* <div className='education-wrapper'>

      < SwiperEducation />
      </div> */}

       
      
          <ul className='education-wrapper'>
            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>Психолог, кандидат психологических наук - </p>
                  <p className='education-text'>
                    Санкт-Петербургский Государственный Университет
                  </p>
                  <p className='education-text'>
                    Закончил, защитил диссертацию и 9 лет преподавал в Санкт-Петербургском Государственном Университете, Факультет Психологии
                  </p> 
              </div>
              <div className='education-image-wrapper diplom'>
                  <img src={E1} className='education-image' alt="" />
                  <img src={E2} className='education-image' alt="" />  
              </div>
            
                      
            </li>
            <li className='education-item' >
              <div className='education-info'>
                  <p className='education-title'>
                  Сертифицированный гештальт-терапевт - </p>
                  <p className='education-text'>
                    ИИГТ (Санкт-Петербург),
                  </p>
                  <p className='education-text'>
                  Мифологическое мышление, полярности картины мира и метафоры жизни, Елена Петрова и Михаил Чегодаев
                  </p>            
              </div>
              <div className='education-image-wrapper'>
                  <img src={E3} className='education-image' alt="" />
              </div>           
             
            </li>

            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                   Сертифицированный коуч - </p>
                  <p className='education-text'>
                    Certificate of Foundation of a Great Coaching: Enhanced Level. (USA), Agile Couching Professional, Scrum track (Москва), Accelerating Coaching Experience, Journey to Mastery, WBECS (USA), Accelerating Coaching Experience. WBECS (USA), Coaching in organization and business. Core competencies of professional coaching, ICA (Москва), MBTI® Certified Ernst & Yung (UK)
                  </p>
                  <p className='education-text'>
                    Учился коучингу у Девида Годсмита и Девида Питерсона (ex коучинг директор Google)
                  </p>            
              </div>
              <div className='education-image-wrapper'>
                 <img src={E4} className='education-image' alt="" />
              </div>
           
             
            </li>

            <li className='education-item'>
              <div>
                  <p className='education-title'>
                  Сертифицированный бизнес-тренер - </p>
                  <p className='education-text'>
                  Experiential Learning, MTa Learning (UK)
                  </p>
              </div>
                             
            </li>

            <li className='education-item'>
              <div className='education-info'>
                  <p className='education-title'>
                  Фасилитатор командных сессий - </p>
                  <p className='education-text'>
                  Advanced Facilitator. Pinpoint Facilitation Limited (UK), Pinpoint Facilitator , Pinpoint Facilitation Limited (UK)
                  </p>  
              </div>
                            
            </li>

        
          </ul>
        
   
    </section>
    
  );
}

export default EducationSection;