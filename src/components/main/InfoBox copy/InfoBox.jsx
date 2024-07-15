import React from 'react'


import Heading from '../../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';
import TextBlock from '../TextBloсk/TextBloсk';

import TextAbout from '../../section/HeroSection/textAbout/textAbout';


function InfoBox({
  isClassBox,
  isClassSubtitle,
  level,
  title,
  subtitle,
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
        < Subtitle
          subtitle = {subtitle}
          isClassSubtitle = {isClassSubtitle}         
        />
        < TextAbout    
          /> 
        <TextBlock  
           isClassText= {isClassText} 
           text1 = {text1}
           text2 = {text1}
           text3 = {text1}
           text4 = {text1}
        />   

    

        
    
 
  </div>
  );
}

export default InfoBox;
