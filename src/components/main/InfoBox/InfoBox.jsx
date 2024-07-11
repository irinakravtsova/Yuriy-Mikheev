import React from 'react'
import './InfoBox.css'

import Heading from '../../Heading/Heading';
import Subtitle from '../Subtitle/Subtitle';
import TextBlock from '../TextBloсk/TextBloсk';
import Button from '../../button/button';

import Brand from '../Brand/Brand';
import FirstConsultation from '../FirstСonsultation/FirstConsultation';


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
    
        < TextBlock
          isClass = {'text'}
          /> 
        < Brand
        isClass = {'brend'}
        text = 'Помощь с заботой и уважением'    
        /> 
        < FirstConsultation /> 
    
    </div> 
  </div>
  );
}

export default InfoBox;
