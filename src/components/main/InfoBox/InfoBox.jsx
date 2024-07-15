import React from 'react'


import Heading from '../../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';
import TextBlock from '../TextBloсk/TextBloсk';



import TextAbout from '../textAbout/textAbout';


function InfoBox({
  isClassBox,
  isClassSubtitle,
  level,
  title,
  subtitle,
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
          // isClass = {'text'}
          /> 
        {/* <TextBox  />    */}

    

        
    
 
  </div>
  );
}

export default InfoBox;
