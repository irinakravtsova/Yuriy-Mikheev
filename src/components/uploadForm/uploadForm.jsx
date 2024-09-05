import React from "react";
import InputMask from 'react-input-mask';
import { useState } from "react";

function UploadForm() {
  const [result, setResult] = React.useState("");
  

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
      setResult("Форма успешно отправлена");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
      
      {/* <form onSubmit={onSubmit}>
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
  
        <textarea name="message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span> */}


      <div className=" popup__content-footer" >
    
                    
        <div className="popup__wrapper footer__form__wrapper">
          <p className="footer-title popup-title">Записаться на первую<br></br> бесплатную консультацию</p>
        
        </div>        

        <form className="order__form" action="/example/handler.php"
              method="post"  autoComplete="off"
               onSubmit={handleInputChange}
               >
        
        
          <input 
          className="input footer-input"
          type="text"
          name="name"
          value={form.name}        
          placeholder="Имя"
          required
          autoComplete="off"
          onChange={handleInputChange}/>
   
          <input  
          className="input order__input footer-input"
          type="email"
          name="email"
          value={form.email}
          // pattern=".+@example\com"
          required
          placeholder="Email"
           autoComplete="off"
          onChange={handleInputChange}
          />
         
          

        <InputMask
          name="phone"
          value={form.phone}
           mask="+9 (999) - 999 - 99 - 99"
          replacement={{ _: /\d/ }}
          className="input order__input footer-input"
          placeholder="Номер телефона"
           autoComplete="off"
          required
          onChange={handleInputChange}
        />
    
         

          <button className="popup__btn-form footer-btn" type="submit" onClick={onSubmit}> Оставить заявку</button>
         
        </form> 
        <span>{result}</span>

        <p className="popup__subtitle footer-subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>
       
     
     
     </div>

    </div>
    
    
  );
}


export default UploadForm;