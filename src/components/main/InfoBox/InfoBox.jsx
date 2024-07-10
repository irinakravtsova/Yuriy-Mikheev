import React from 'react'
import './InfoBox.css'

import Heading from '../../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';
import TextBlock from '../TextBloсk/TextBloсk';
import Button from '../../button/button';


function InfoBox() {
  return (
    <div className='hero__info'>
    
      < Heading
        level = 'h1'
        isClass = {'hero-title'}
        text = 'Я помогаю вам '
      />
      < Subtitle
        isClass = {'hero-subtitle'}
        text = 'повысить качество вашей жизни'
      />
      < TextBlock
        isClass = {'text'}
         /> 
      < Button 
        isClass = {'hero__info-button'}
        text = 'Начать'      
      />
    

 
  </div>
  );
}

export default InfoBox;
