import React from 'react'


import Heading from '../../../Heading/Heading';
import Subtitle from '../../../main/Subtitle/Subtitle';
import TextBlock from '../../../main/TextBloсk/TextBloсk';

import TextAbout from '../textAbout/textAbout';


function HeroInfo({
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
    
 
  </div>
  );
}

export default HeroInfo;
