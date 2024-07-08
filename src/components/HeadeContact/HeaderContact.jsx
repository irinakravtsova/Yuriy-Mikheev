import React from 'react';
import Phone from '../../assets/Whatsapp.png';
import TG from '../../assets/TG-group.png';


function HeaderContact(props) {
  return (
    <ul class="header__contact">
      <li>
        <a class="header__contact-fb" href="https://api.whatsapp.com/send/?phone=79219925463&text&type=phone_number&app_absent=0" target="_blank">
          <img src={Phone} alt=""/>
        </a>
      </li>
   
      <li>
        <a class="header__contact-in" href="https://t.me/Yuriy_Mikheev" target="_blank">
          <img src={TG} alt=""/>
        </a>
      </li>
    </ul>
    
  );
}

export default HeaderContact;