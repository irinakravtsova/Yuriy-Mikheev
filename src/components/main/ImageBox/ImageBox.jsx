import React from 'react'

function ImageBox(props) {
  return (
    <div className='hero__image'>

      <img src={props.image}
       className={props.isClassImage} alt={props.isAlt} />
    
    </div>  
  )
}
export default ImageBox;
