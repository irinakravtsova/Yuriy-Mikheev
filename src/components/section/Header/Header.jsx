import React from 'react'
import { useState } from 'react';

import './Header.css'

import Navigation from '../../Navigation/Navigation';
import LogoLink from '../../LogoLink/LogoLink';
import HeaderContact from '../../HeadeContact/HeaderContact';
import Burger from '../../burger/burger';

function Header() {
  const [burger, setBurger] = useState('burger');

  function burgerClickOpen () {
    console.log('click');
    
  }

  return (
    <header className='header'>
       <div className='header-wrapper'>
          < Navigation />
          < LogoLink />
          < HeaderContact />

        </div> 
        <button className="js-burger-btn burger-btn" onClick={burgerClickOpen} >
              <span className="burger_line long"></span>
              <span className="burger_line"></span>
            </button>
        <Burger 
      />

    </header> 
     
  );  
}

export default Header