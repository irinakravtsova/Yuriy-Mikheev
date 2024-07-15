import React from 'react'


import Heading from '../../Heading/Heading';
import Text from '../Text/Text';

function Info({
  isClassBox,
  level,
  title,
  isClassTextWrapper, 
  isClassText,
  text1,
  text2,
  text3,
  text4
}) {
  return (
    <div className={isClassBox}>    
        < Heading  
          level = {level}     
          title = {title}
          />
    
        <Text  
           isClassText= {isClassText}
           isClassTextWrapper = {isClassTextWrapper} 
           text1 = {text1}
           text2 = {text2}
           text3 = {text3}
           text4 = {text4}
        /> 
    </div>
  );
}

export default Info;
