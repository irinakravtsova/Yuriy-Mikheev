import React from 'react'
import Banana from '../../../assets/hero-photo.png'
import './ImageBox.css'


function ImageBox() {
  return (
    <div className='hero__image'>

      <img src={Banana}
       className='hero__image-foto' alt="" />

    
    </div>
  
  )
}

export default ImageBox;
