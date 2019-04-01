import React, { useState } from 'react';
import Indicator from './indicator';

export default function Clicker(props) {
  const [clicks, setClicks] = useState(2);
  // Same as:
  /*
  const res = useState(2);
  const clicks = res[0];
  const setClicks = res[1];
  */

  console.count('Clicker was called');

  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <>
      <p>You clicked {clicks} times</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}


