import React from 'react'
import './textAbout.css'


function TextAbout() {
 
  return (
    <div className='box-about'>
      <h3 className='title-about'>психолог<br></br> 
          психотерапевт <br></br>
          20+ лет практики</h3>
      <h4 className='subtitle-about'> Юрий Михеев </h4>
      <p className='text-about'>
          кандидат психологических наук,<br></br>
          сертифицированный гештальт-терапевт,<br></br>
          сертифицированный коуч.<br></br> 
              
      </p>
      <p className='text-about text-about-metod'>
        Использую в работе только научно обоснованные методы и технологии</p>
    </div>   
  );
}

export default TextAbout;