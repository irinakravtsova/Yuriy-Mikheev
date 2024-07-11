import React from 'react'
import LinkButton from '../../linkButton/linkButton';
import './FirstConsultation.css'

function FirstConsultation(props) {

  return (
    <div className='firstconsultation-box'>
      
       <h3 className= 'firstconsultation-text'>первая встреча бесплатно</h3>
       < LinkButton 
          isClass = {'hero__info-button'}
          text = 'Записаться'      
       />
    </div>
    
   
  );
 }

export default FirstConsultation;