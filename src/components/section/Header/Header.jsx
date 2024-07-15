import React from 'react'

import './Header.css'
import Navigation from '../../Navigation/Navigation';
import LogoLink from '../../LogoLink/LogoLink';
import HeaderContact from '../../HeadeContact/HeaderContact';

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
    
     </header>
     
     
  );
  
}

export default Header