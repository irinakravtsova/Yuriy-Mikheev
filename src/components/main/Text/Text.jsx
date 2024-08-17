import React from 'react'

function Text(props) {
 
  return (
    <div className={props.isClassTextWrapper}>
      <p 
        className={props.isClassText}>
        {props.text2}
      </p>
        <p 
        className={props.isClassText}>
        {props.text22}
      </p>
          <p 
          className={props.isClassText}>
          {props.text3}
      </p>
      <p 
          className={props.isClassText}>
          {props.text4}
      </p>
      <p 
          className={props.isClassText}>
          {props.text5}
      </p>
    </div>

  );


}

export default Text;