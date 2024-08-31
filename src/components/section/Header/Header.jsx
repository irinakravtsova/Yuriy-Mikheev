import React from 'react'
import { useState } from 'react';

import './Header.css'

import Navigation from '../../Navigation/Navigation';
import LogoLink from '../../LogoLink/LogoLink';
import HeaderContact from '../../HeadeContact/HeaderContact';
import Burger from '../../burger/burger';
import Close from '../../../assets/Close.svg'

function Header() {  
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <>
    <header className='header'>
       <div className='header-wrapper'>
          < Navigation />
          < LogoLink />
          < HeaderContact />

        </div> 
        <button className='burger-btn'
                onClick={() => setBurgerActive(!burgerActive)} 
                >
              <span className="burger_line long"></span>
              <span className="burger_line"></span>
        </button>
    </header> 
    <div className= {burgerActive ? 'burger burger_open' : 'burger'}
         onClick={() => setBurgerActive(false)}>
        <Burger 
        active = {burgerActive}
        setActive = {setBurgerActive}
         />
        </div>
    </>     
  );  
}

export default Header