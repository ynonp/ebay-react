import React from 'react';

export default function Indicator(props) {
  let msg = '';
  if (props.value > 10) {
    msg = 'Bravo!';
  } else {
    msg = 'Keep trying...';
  }

  return (
    <p>{msg} - {props.value}</p>    
  );
}

