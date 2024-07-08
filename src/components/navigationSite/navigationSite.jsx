import React from 'react'

function NavigationSite(props) {
  return (
    <ul className="nav__list">
      <li className="nav__item" >
        <a className="nav__link " href="#about">Обо мне</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#projects">Проекты</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#services">Услуги</a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#contacts">Контакты</a>
      </li>
  </ul>            
  );
}

export default NavigationSite;