import React from 'react'

function Subtitle({
  isClassSubtitle,
  subtitle
}) {

  return (
    <p className= {isClassSubtitle}>{subtitle}</p>
  );
 }

export default Subtitle;