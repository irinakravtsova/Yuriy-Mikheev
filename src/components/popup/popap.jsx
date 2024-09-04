import React from 'react'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import './popup.css'
import '../BellButton/BellButton.css'




function Popup(props) {
  const initialState = {
    name: "",   
    phone: "",
    email: "",   
  };
 
  const [form, setForm] = useState(initialState);

 
  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleClick() {
    let error = formValidata();
    if (error === 0) {
      setForm(initialState);      
      alert("Заявка успешно отправлена");



    }
  }

  function formValidata() {
    let error = 0;
    if (
      !form.name ||     
      !form.phone ||
      !form.email 
    
    ) {
      error++;
      alert("Заполните пожалуйста все поля");
    } else if (!isValidEmail(form.email)) {
      error++;
      alert("Введи корректный Email");
    } 
    return error;
  }
  
  function isValidEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  }

 

  return (
   
    <div>
      <div className=" popup__content"
           >
      <button className= "popup__close-btn"
             onClick={props.click}></button>
                    
        <div className="popup__wrapper">
          <p className="popup__title">Записаться на первую<br></br> бесплатную консультацию</p>
        
        </div>        

        <form className="order__form" 
                action="send.php"
                method="post"
                autoComplete='off'
               onSubmit={handleInputChange}
         >
        
          <input 
          className="input order__input"
          type="text"
          name="name"
          value={form.name}        
          placeholder="Имя"
          autoComplete='off'
          onChange={handleInputChange}/>
    
          <input  
          className="input order__input"
          type="email"
          name="email"
          autoComplete='off'
          value={form.email}
          pattern=".+@example\com"
          required
          placeholder="Email"
          onChange={handleInputChange}
          />

        <InputMask
          name="phone"
          value={form.phone}
           mask="+9 (999) - 999 - 99 - 99"
          replacement={{ _: /\d/ }}
          className="input order__input"
          placeholder="Номер телефона"
          autoComplete='off'
          onChange={handleInputChange}
        />
    
           {/* <div className="button-wrapper">
            < BellButton 
             text = 'Оставить заявку' 
             type = "submit" />
            </div> */}
          <div className='popup-btn'>
          <button className="btn flash-btn" type="submit" onClick={handleClick} onClickCapture={props.click}> Оставить заявку</button>
          </div>
         
         
        </form> 

        <p className="popup__subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>
       
     
     
     </div>
  </div>



  );
}

export default Popup;