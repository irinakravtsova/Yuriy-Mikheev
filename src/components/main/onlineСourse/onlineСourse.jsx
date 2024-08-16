import React from 'react'
import LinkButton from '../../linkButton/linkButton';
import './onlineCourse.css'
import Brand from '../Brand/Brand';

function OnlineСourse(props) {

  return (
   <div className="course__wrapper"> 
    <div className='course-box'>
          
      <h2 className="course-text course-text-bold">
         Неуверенные в себе люди
      </h2>
      <p className='course-text'>
      не просят повышения зарплаты,
      </p> 
      <p className='course-text'>
      не высказывают свои идеи
      </p> 
      <p className='course-text'>
      и даже бояться подойти к девушке.
      </p>
     
      <p className='course-text'>
      Медитации и аффирмации не помогают? 
      </p>
      <p className='course-text course-text-bold'>
      Попробуйте пройти мой авторский онлайн курс 
      </p>
       

      {/* < Brand 
         isClass = {'brend'}
         text = 'Помощь с заботой и уважением'/> */}
      <div >        
            <h3 className= 'firstconsultation-text'> "Уверенное поведение в жизни и на работе"</h3>
            < LinkButton 
               isClass = {'hero__info-button'}
               text = 'Ознакомиться'      
            />
       </div>
     </div>

   </div>
    
   
  );
 }

export default OnlineСourse;