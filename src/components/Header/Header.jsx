import React from 'react'

import './Header.css'
import Navigation from '../../Navigation/Navigation';
import LogoLink from '../../LogoLink/LogoLink';
import HeaderContact from '../../HeadeContact/HeaderContact';
import Burger from '../burger/burger';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
          < Navigation />
          < LogoLink />
          < HeaderContact />        

        </div>
       
      
      </div>
      <div className="js-burger burger">
        <Burger />
        </div>
    
     </header>
     
     
  );
  
}

export default Header