import React from 'react'
import { useState } from 'react';
import './FirstConsultation.css'
import '../../popup/popup.css'
import Brand from '../Brand/Brand';
import Popup from '../../popup/popap';
import InputMask from 'react-input-mask';
import '../../Footer/Footer.css'
// import '../../popup/popap.css'
// import '../BellButton/BellButton.css'

function FirstConsultation(props) {
  const [popupActive, setPopupActive] = useState(false);
  const [result, setResult] = React.useState("");
  const initialState = {
    name: "",   
    phone: "",
    email: "",   
  };
 
  const [form, setForm] = useState(initialState);


  const onSubmit = async (event) => {
    console.log('click');
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9574cfc8-9d2a-4105-bc08-1fbbb32f6f7e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Заявка успешно отправлена")
      // setResult("Заявка успешно отправлена");
      setResult('')
      setForm(initialState);
    setPopupActive(false)

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
 
  function close(event) {
   event.preventDefault()
   setPopupActive(false)
   
  }


  return (
   <div className='firstconsultation-box'>
      < Brand 
         isClass = {'brend'}
         text = 'Помощь с заботой и уважением'/>
      <div >        
            <h3 className= 'firstconsultation-text'>первая встреча бесплатно</h3>

            <div className='firstconsultation-btn'>
               <button className='btn flash-btn'
                  onClick={() => setPopupActive(!popupActive)} >
                  Записаться
               </button>
            </div>
         
            <div className= {popupActive ? 'popup popup_open' : 'popup'}
                    >
                      <div>
      <div className=" popup__content"
           >
      <button className= "popup__close-btn"
             onClick={() =>  setPopupActive(false)}></button>
                    
        <div className="popup__wrapper">
          <p className="popup__title">Записаться на первую<br></br> бесплатную консультацию</p>
        
        </div>  
             

        <form className="order__form"                
                 method="post"
                autoComplete='off'
               onSubmit={onSubmit}
             
         >
        
          <input 
          className="input order__input"
          type="text"
          name="name"
                
          placeholder="Имя"
          autoComplete='off'
         />
    
          <input  
          className="input order__input"
          type="email"
          name="email"
          autoComplete='off'
        
          // pattern=".+@example\com"
          required
          placeholder="Email"
        
          />

        <InputMask
          name="phone"         
          //  mask="+9 (999) - 999 - 99 - 99"
          // // replacement={{ _: /\d/ }}
          className="input order__input"
          placeholder="Номер телефона"
          autoComplete='off'
        
        />   
         
          <div className='popup-btn'>
           <button className="btn flash-btn" type="submit"  > Оставить заявку</button>
          </div>
         
         
        </form> 

        <p className="popup__subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>
        <span className="popup__subtitle footer-subtitle">{result}</span>   
       
     
     
     </div>
  </div>



  );
                   {/* < Popup 
                   click={() => setPopupActive(false)}
                    /> */}
     
             </div>   
        
       </div>

   </div>
    
   
  );
 }

export default FirstConsultation;