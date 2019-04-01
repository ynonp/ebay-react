import React, { useState } from 'react';
import Clicker from './clicker';
import Indicator from './indicator';
import ClickerWithIndicator from './clicker_with_indicator';

// same as:
// const useState = React.useState;
import ReactDOM from 'react-dom';


function App(props) {  
  return (
    <div>
      <h1>Hello World</h1>
      <ClickerWithIndicator />

      <Clicker />
      <Indicator value={91} />

      <Clicker />
      <Indicator value="5" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));
