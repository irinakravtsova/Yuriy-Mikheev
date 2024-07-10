import React from 'react'



function Subtitle(props) {

  return (
    <p className= {props.isClass}>{props.text}</p>
  );
 }

export default Subtitle;