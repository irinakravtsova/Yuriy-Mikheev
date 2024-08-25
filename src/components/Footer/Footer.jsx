import React from 'react'

import './Footer.css'


function Footer() {
  return (
    <footer className='footer'
            id='contacts'>
      <div className="footer__info">
        <h2 className='footer-title'>Михеев Юрий Александрович</h2>
        <p className='footer-INN'>ИНН - 781702316462</p>
        <p className='footer-INN'>публичная оферта для клиентов из РФ</p>
        <p className='footer-input-title'>Связаться со мной</p>
        <input type="text" placeholder='Введите e-mail' className='footer-input-text' />
        <button className='footer-input-button'>Отправить</button>

      </div>

    </footer>
   
     
     
  );
  
}

export default Footer