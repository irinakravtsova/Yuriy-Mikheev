import React from 'react'
import { useState } from 'react';
import './FirstConsultation.css'
import '../../popup/popup.css'
import Brand from '../Brand/Brand';
import Popup from '../../popup/popap';

function FirstConsultation(props) {
  const [popupActive, setPopupActive] = useState(false);


  return (
   <div className='firstconsultation-box'>
      < Brand 
         isClass = {'brend'}
         text = 'Помощь с заботой и уважением'/>
      <div >        
            <h3 className= 'firstconsultation-text'>первая встреча бесплатно</h3>
            <div className='hero__info-button'
                 onClick={() => setPopupActive(!popupActive)} >
               Записаться
            </div>
            <div className= {popupActive ? 'popup popup_open' : 'popup'}
                   onClick={() => setPopupActive(false)}>
                   < Popup
                     active = {popupActive}
                     setActive = {setPopupActive} />
     
        </div>
            
           
           
         
        
       </div>

   </div>
    
   
  );
 }

export default FirstConsultation;