import React, { useState } from 'react';

/**
 * Fill the code here so same text 
 * appears in all text boxes
 */

export default function MultipleTextboxes(props) {
  const [ text, setText ] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} type="text" onChange={handleChange} />
      <input value={text} type="text" onChange={handleChange} />
      <input value={text} type="text" onChange={handleChange} />
      <input value={text} type="text" onChange={handleChange} />
      <input value={text} type="text" onChange={handleChange} />
      <input value={text} type="text" onChange={handleChange} />
    </>
  )
}

