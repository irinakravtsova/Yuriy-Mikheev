import React from 'react'
import { useState } from 'react';
import './FirstConsultation.css'
import '../../popup/popup.css'
import Brand from '../Brand/Brand';
import Popup from '../../popup/popap';

function FirstConsultation(props) {
  const [popupActive, setPopupActive] = useState(false);
 
  function close(event) {
   event.preventDefault()
   setPopupActive(false)
   console.log('click');
   
  }


  return (
   <div className='firstconsultation-box'>
      < Brand 
         isClass = {'brend'}
         text = 'Помощь с заботой и уважением'/>
      <div >        
            <h3 className= 'firstconsultation-text'>первая встреча бесплатно</h3>
            <button className='hero__info-button'
                 onClick={() => setPopupActive(!popupActive)} >
               Записаться
            </button>
            <div className= {popupActive ? 'popup popup_open' : 'popup'}
                    >
                   < Popup 
                   click={() => setPopupActive(false)}
                    />
     
             </div>   
        
       </div>

   </div>
    
   
  );
 }

export default FirstConsultation;