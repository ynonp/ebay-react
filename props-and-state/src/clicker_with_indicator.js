import React, { useState } from 'react';
import Clicker from './clicker';
import Indicator from './indicator';

/**
 * Write a component that shows both a Clicker and an Indicator
 */

export default function ClickerWithIndicator(props) {
  const [ clicks, setClicks ] = useState(0);

  return (
    <>
      <Clicker clicks={clicks} setClicks={setClicks} />
      <Indicator value={clicks} />
    </>
  )
}

