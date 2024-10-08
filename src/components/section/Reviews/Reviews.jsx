import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import './Reviews.css'


import Quote from '../../../assets/кавычки.svg'
import Line from '../../../assets/review.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from '../../Slide/IconButton/IconButton';
import { Slider } from '../../Slide/Slider/Slaider';
import { IconButtonReviews } from './IconButtonReviews';



function Review() {

  const data  = [
    {
        id: 1,
        name: 'Екатерина',     
        quote:
            'Хотела бы оставить отзыв о работе с Юрием. У нас было 10 консультаций, и это был мой первый опыт работы с коучингом. До этого казалось, что это нечто надуманное и точно не приносящее результат. Однако наше взаимодействие показало, что я ошибалась. Мы работали над конкретными вопросами, и на старте для меня был важен сам факт их формулирования. В этом помог Юрий. Работа была продуктивная, по делу, но при этом в дружелюбной и поддерживающей среде, что крайне важно в разговоре о том, что волнует человека. поэтому вкратце могу сказать так: доверие, ориентация на результат, профессионализм, внимание к деталям и много пользы ) Спасибо!',
    },
    {
        id: 2, 
        name: 'Егор',
        quote:
            'Работа с Юрием строилась вокруг коучинга. Мой первичный запрос был связан с потерей мотивации. В работе, саморазвитии и т.д. Ничего не зажигало и все сводилось к "было бы здорово, но не вдохновляет". Уже на ПЕРВОЙ сессии вскрылись вопросы, связанные с десенсибилизация, искусственном ограничении собственных "хотелок". Внимание Юрия, его точные и вскрывающие вопросы - это нечто. Если вы хотите разобраться в себе, чтобы вас аккуратно направляли к нужным вопросам и ответам на них - советую обратиться к Юрию. Спокойный, вдумчивый подход. Никакой лишней воды и теоретизации "моего состояния". Фокус на том, чтобы разобраться в корне проблемы и том, как с ней бороться. Как исправить, в моем случае, заскорузлую и очень въевшуюся проблему. Удивительный опыт! При том, что мне есть с чем сравнивать - бэкграунд из нескольких коучей и психотерапевтов за последние 10 лет.',
    },
    {
        id: 3,
        name: 'Виктория',
           quote:
            'Консультации с Юрием мне понравились. Самое важное, что я решила многие свои рабочие вопросы и личные, но кроме того сам процесс был очень увлекательный, так как были, например, метафорические задания. Я шла на консультацию с мыслями о том, что Юрий может мне помочь и он мне помог, за что огромная благодарность. Очень приятно когда ожидания совпадают с действительностью.',
    },
    {
        id: 4,     
        name: 'Елена',    
        quote:
            'Я обратилась с тем, что мои отношения с мужем постоянно ухудшались, я не понимала в чем причина и как мне быть. Терапия помогла мне понять, что я в отношениях заняла роль, которая меня перестала устраивать, стала лучше отстаивать свои границы и интересы и мы наладили общение с мужем на новом уровне. Мы смогли лучше понять друг друга, хотя до этого прожили вместе много лет, как будто узнали друг друга по-новому. До терапии я на него обижалась, злилась и не понимала этого. Он меня критиковал, говорил мне, что хочет развестись, что наши отношения совсем испортились. Я поняла, чего мне не хватало в отношениях, потом смогла понять, чего ему не хватает, мы с ним договорились, что будем внимательнее к друг другу и будем вести себя не так, как раньше. Мы смогли начать жить вместе по-другому. Сейчас у нас все хорошо!',
    },
    {
      id: 5,   
      name: 'Катя',    
      quote:
          'Вы сделали для меня то, что я не могла найти много лет. Я стала чувствовать себя спокойнее и увереннее. Мне было очень сложно отстаивать свои интересы, добиваться того, что мне было нужно. На работе мной понукали и вешали на меня все что могли. Дома в семье я чувствовала себя ненужной. Сейчас я понимаю свои сильные стороны, сама стала ценить себя и добиваться большего к себе уважения от других. Мне стало проще общаться с людьми, которые мне не нравятся, и с теми, у кого ко мне претензии. Я стала спокойнее реагировать на критику.',
  },
  ];



  // const [people, setPeople] = useState(data);
  const [curentIndex, setCurentIndex] = useState(0);

  const prev = () => {
    setCurentIndex(curentIndex => {
      if (curentIndex > 0) {
        return curentIndex - 1
      }
      return curentIndex
    })
  }

  const next = () => {
    setCurentIndex(curentIndex => {
      if (curentIndex < data.length - 1) {
        return curentIndex + 1
      }
      return curentIndex
    })
  }

  
useEffect(() => {
  const lastIndex = data.length - 1;
  if (curentIndex <0) {
    setCurentIndex(lastIndex)
  }
}, [curentIndex, data]); 

useEffect(() => {
  const lastIndex = data.length - 1;
  if (curentIndex > lastIndex) {
    setCurentIndex(0)
  }
}, [curentIndex, data]); 


  return (
    <section className='section reviews'>
      <div className='review-title'>
        <h2 className='heading-h2'>
         Отзывы</h2> 
        <h3 className='heading-h2 reviews__subtitle'>что говорят обо мне клиенты</h3>   
      </div>
     

     
      <div className='section-center'>
      <img src={Quote} alt="" className='quote' />  
        {data.map((person, personIndex) => {
          const {id, name, quote} = person;
          let position = 'nextSlide';
          if (personIndex === curentIndex) {
            position = 'activeSlide';
          }

          if (personIndex === curentIndex - 1 || (curentIndex === 0 && personIndex === data.length - 1)) { //если элемент предпоследний или это первый элемент и его индекс равен количеству всех пользователей в массиве (то есть проверка на то, что у нас всего один элемент в массиве) тогда мы его называем последним 
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
               
                         
              <p className='text'>{quote}</p>
              <div className='name'>
                <img src={Line} className='name__line' alt="" />
              <h4 className='title'>{name}</h4> 
              </div>         

            </article>
          )
            
        }) }
  
         <div className='icon-buttons-box'>
            <IconButtonReviews
              cls = 'reviews__button-prev'
              direction="left"
              onClick={prev}
              disable={curentIndex === 0}
            />
            <IconButtonReviews
              
              direction="right"
              onClick={next}
              disable={curentIndex === data.length - 1}
            />     
     
        </div>  
    
      </div> 

 
    </section>    
  );
}

export default Review;