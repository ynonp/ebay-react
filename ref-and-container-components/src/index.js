import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Page1, Page2 } from './containers';

// Ref is used for:
// 1. focus
// 2. forms - get the values instead of saving it in state
// 3. escape hatch from React - for jQuery plugins

function App(props) {
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  function maybeChangeFocus(ev) {
    const input = ev.target;
    if (input.value.length > 5) {
      const next = (Number(input.dataset.idx) + 1) % 4;
      inputRefs[next].current.focus();
    }
  }

  return (
    <div>
      <Page1 />
      <input data-idx={0} type='text' ref={inputRefs[0]} onChange={maybeChangeFocus} />
      <input data-idx={1} type='text' ref={inputRefs[1]} onChange={maybeChangeFocus} />
      <input data-idx={2} type='text' ref={inputRefs[2]} onChange={maybeChangeFocus} />
      <input data-idx={3} type='text' ref={inputRefs[3]} onChange={maybeChangeFocus} />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
