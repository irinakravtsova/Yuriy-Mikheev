import React from 'react'
import './InfoBox.css'

import Heading from '../../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';
import TextBlock from '../TextBloсk/TextBloсk';
import Button from '../../button/button';
import LinkButton from '../../linkButton/linkButton';


function InfoBox() {
  return (
    <div className='hero__info'>
      <div className='hero__title-box'>
        < Heading
          level = 'h1'
          isClass = {'hero-title'}
          text = 'Я помогаю вам '
        />
        < Subtitle
          isClass = {'hero-subtitle'}
          text = 'повысить качество вашей жизни'
        />
      </div>
    
    
      < TextBlock
        isClass = {'text'}
         /> 
      < LinkButton 
        isClass = {'hero__info-button'}
        text = 'Начать'      
      />
    

 
  </div>
  );
}

export default InfoBox;
