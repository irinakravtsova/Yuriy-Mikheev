import React from 'react'
import Banana from '../../../assets/фото5.svg'
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
