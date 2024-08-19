import React from 'react'


import Heading from '../../Heading/Heading';
import Text from '../Text/Text';

function Info({
  isClassTitle,
  isClassBox,
  cls,
  level,
  title,
  isClassTextWrapper, 
  isClassText,
  text22,
  text2,
  text3,
  text4,
  text5,
  text6
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
        <p className={cls}>{text6}</p>
    </div>
  );
}

export default Info;
