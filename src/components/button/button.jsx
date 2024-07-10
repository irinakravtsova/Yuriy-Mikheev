import React from 'react'

function Button(props) {
  return (
    <button className={props.isClass}>{props.text}</button>
  );
}

export default Button;