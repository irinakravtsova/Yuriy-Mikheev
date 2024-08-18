import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Science.css'

import Picture1 from '../../../assets/Вики.jpg';
import Picture2 from '../../../assets/центр оценки.jpg';
import Picture3 from '../../../assets/Статья в психологическом журнале.jpg';
import Picture4 from '../../../assets/Институт тренинга.jpg';
import Picture5 from '../../../assets/Книга.jpg';






function Science() {

// const [Slider, setSlider] = useState();
// const [ControlPrev, setControlPrev] = useState();
// const [ControlNext, setControlNext] = useState();
// const [Box, setBox] = useState();

function hendleClickPrev (e) {

}

function hendleClickNext (e) {

}





  return (
   <section className='section science'> 
    <div className="science__title">
      <h2 className='science__title-title'>Мой вклад в науку <br></br> и практику</h2>  
      </div> 
      <div className="science__controls">
          <button 
            className='science__contriol-prev'
            onClick={hendleClickPrev}
            ></button>
          <button 
            className='science__contriol-next'
            onClick={hendleClickNext}
            ></button>
        </div>
   
        <div className="science__inner">    

            <div className='science__box' >
              <a href="https://bigenc.ru/c/biograficheskii-oprosnik-4aecd0"
                  target="_blank">
              <div className="science__slide">
                <img 
                  className='science__image'
                  src={Picture1} alt="Статья в Большой Российской Энциклопедии" />
                <div>
                  <h3 className='science__text'>
                  Вхожу в команду авторов раздела психология Большой Российской Энциклопедии
                  </h3>
                </div>

              </div>
             </a>
            </div> 

            
            <div className='science__box' >
              <a href="https://www.shl.ru/uploads/file/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0_%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B8.pdf"
                  target="_blank">
              <div className="science__slide">
                <img 
                  className='science__image'
                  src={Picture2} alt="Российский стандарт Центра оценки " />
                <div>
                  <h3 className='science__text'>
                    Разработал с командой экспертов Российский стандарт Центра оценки
                  </h3>
                </div>

              </div>
             </a>
            </div> 

            
            <div className='science__box' >
              <a href="https://ppj.spbpo.ru/psy/article/view/191"
                  target="_blank">
              <div className="science__slide">
                <img 
                  className='science__image'
                  src={Picture3} alt="Статья в психологическом журнале" />
                <div>
                  <h3 className='science__text'>
                  Разработал психодиагностический метод для определения уровня и особенностей личной мотивации
                  </h3>
                </div>

              </div>
             </a>
            </div> 

            <div className='science__box' >
              <a href="https://training-institute.ru/komanda/trenery-konsultanty-fasilitatory/yurij-mixeev/"
                  target="_blank">
              <div className="science__slide">
                <img 
                  className='science__image'
                  src={Picture4} alt="Институт тренинга" />
                <div>
                  <h3 className='science__text'>
                  Разработал и провел для сотен руководителей тренинг по коучингу на рабочем месте, мотивации сотрудников, развитию подчиненных
                  </h3>
                </div>

              </div>
             </a>
            </div> 

            <div className='science__box' >
              <a href="https://www.litres.ru/book/nina-ryzhova/centr-ocenki-shag-za-shagom-navigator-po-razrabotke-i-provede-9534914/chitat-onlayn/"
                  target="_blank">
              <div className="science__slide">
                <img 
                  className='science__image'
                  src={Picture5} alt="Книга" />
                <div>
                  <h3 className='science__text'>
                    Написал книгу "Центр оценки шаг за шагом" (в соавторстве с Ниной Рыжовой)
                  </h3>
                </div>

              </div>
             </a>
            </div> 

                 
      

             

      </div>   
    </section> 
  );
}

export default Science;
