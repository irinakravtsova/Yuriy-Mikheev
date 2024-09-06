import React from 'react'

import './Footer.css'

import Wapp from '../../assets/Wapp_yellow.svg'
import Tg from '../../assets/TG_yellow.svg'
import PopupFooter from '../popupFooter/popapFooter'
import UploadForm from '../uploadForm/uploadForm'


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

    <ul className='burger__contacts-wrapper'>
             <li>
               <a className="burger__phone footer-contact" href="https://api.whatsapp.com/send/?phone=79219925463&text&type=phone_number&app_absent=0" target="_blank">WhatsApp: <br></br>+7 921 992-54-63</a>
             </li>
             <li >
               <a className="burger__tg footer-contact" href="https://t.me/Yuriy_Mikheev" target="_blank">@Yuriy_Mikheev</a>
             </li>
           </ul>
      </div>
      <div className='footer__form-big'>
      < UploadForm />
      </div>
     
      

    </footer>
   
    </>   
     
  );
  
}

export default Footer