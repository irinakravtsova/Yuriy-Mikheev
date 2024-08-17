import React from 'react'


import Heading from '../../Heading/Heading';
import Text from '../Text/Text';

function Info({
  isClassTitle,
  isClassBox,
  level,
  title,
  isClassTextWrapper, 
  isClassText,
  text22,
  text2,
  text3,
  text4,
  text5
}) {
  return (
    <div className={isClassBox}>    
        < Heading  
          level = {level}     
          title = {title}
          isClassTitle = {isClassTitle}
          />
    
        <Text  
           isClassText= {isClassText}
           isClassTextWrapper = {isClassTextWrapper} 
          //  text1 = {text1}
           text2 = {text2}
           text22 ={text22}
           text3 = {text3}
           text4 = {text4}
           text5 = {text5}
        /> 
    </div>
  );
}

export default Info;
