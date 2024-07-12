import React from 'react'
import './textAbout.css'


function TextAbout(props) {
 
  return (
    <div className='box-about'>
      <h3 className='title-about'>Психолог<br></br> 
          Психотерапевт <br></br>
          20+ лет практики </h3>
      <h4 className='subtitle-about'> Юрий Михеев </h4>
      <p className='text-about'>
          кандидат психологических наук,<br></br>
          сертифицированный гештальт-терапевт,<br></br>
          сертифицированный коуч<br></br>
     
      </p>
    </div>   
  );
}

export default TextAbout;