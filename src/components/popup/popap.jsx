import React from 'react'
import { useState } from 'react';
import './popup.css'


function Popup(active, setActive) {
 

  return (
   
    <div className= {active ? 'popup popup_open' : 'popup '}
          onClick={() => setActive(false)}>
      <div className=" popup__content"
            onClick={e => e.stopPropagation()}>
      <button className="js-popup__close-btn popup__close-btn"></button>
                    
        <div className="popup__wrapper">
          <p className="popup__title">Записаться на первую бесплатную консультацию</p>
        
        </div>
 
        
        <form className="order__form" action="/example/handler.php" >
        
          <input 
          className="input order__input"
          type="text"
          name="name"
          placeholder="Имя"/>
    
          <input  
          className="input order__input"
          type="email"
          name="email"
          placeholder="Электронная почта"/>
    
          <input 
          className="input order__input"
          type="tel"
          name="phone"
          placeholder="Номер телефона"/>

          <button className="popup__btn-form" type="submit"> Оставить заявку</button>
         
        </form> 

        <p className="popup__subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>
       
     
     
     </div>
  </div>



  );
}

export default Popup;