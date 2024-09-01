import React from 'react'

import './Footer.css'

import Wapp from '../../assets/Wapp_yellow.svg'
import Tg from '../../assets/TG_yellow.svg'
import PopupFooter from '../popupFooter/popapFooter'


function Footer() {
  return (
    <>
    <div className='footer__form'>
    < PopupFooter />
      </div> 
    <footer className='footer'
            id='contacts'>
          
      <div className="footer__info">
        <h2 className='footer-title'>Михеев Юрий Александрович</h2>
        <p className='footer-INN'>ИНН - 781702316462</p>
        <p className='footer-INN'>публичная оферта для клиентов из РФ</p>
        <p className='footer-input-title'>Связаться со мной</p>
        {/* <input type="text" placeholder='Введите e-mail' className='footer-input-text' />
        <button className='footer-input-button'>Отправить</button> */}
        <ul className="footer__contact">
            <li>
              <a 
                href="https://api.whatsapp.com/send/?phone=79219925463&text&type=phone_number&app_absent=0" 
                target="_blank">
                  <img 
                    className='contact-active' 
                    src={Wapp} alt=""/>
              </a>
            </li>
        
            <li>
              <a 
                href="https://t.me/Yuriy_Mikheev" 
                target="_blank">
                  <img 
                    className='contact-active'
                    src={Tg} alt=""/>
              </a>
            </li>
    </ul>
      </div>
      <div className='footer__form-big'>
      < PopupFooter />
      </div>
     
      

    </footer>
   
    </>   
     
  );
  
}

export default Footer