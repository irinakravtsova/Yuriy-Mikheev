import React from 'react'
import LinkButton from '../../linkButton/linkButton';
import './FirstConsultation.css'
import Brand from '../Brand/Brand';

function FirstConsultation(props) {

  return (
   <div className='firstconsultation-box'>
      < Brand 
         isClass = {'brend'}
         text = 'Помощь с заботой и уважением'/>
      <div >        
            <h3 className= 'firstconsultation-text'>первая встреча бесплатно</h3>
            < LinkButton 
               isClass = {'hero__info-button'}
               text = 'Записаться'      
            />
       </div>

   </div>
    
   
  );
 }

export default FirstConsultation;