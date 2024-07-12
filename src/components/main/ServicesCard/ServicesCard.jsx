import React from 'react'
import './ServicesCard.css'






function ServicesCard(props) {

  return (
   <div className='service__item'>
    <img className='service__item-image'
    src={props.image} alt="" />
    <p className='service__item-title'>{props.title}</p>
   </div>
  );
 }



export default ServicesCard;