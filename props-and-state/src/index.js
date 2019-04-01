import React, { useState } from 'react';
import Clicker from './clicker';
import Indicator from './indicator';

import MultipleTextBoxes from './multiple_textboxes';
import ClickerWithIndicator from './clicker_with_indicator';

// same as:
// const useState = React.useState;
import ReactDOM from 'react-dom';


function App(props) {  
  return (
    <div>
      <h1>Hello World</h1>

      <ClickerWithIndicator />
      <MultipleTextBoxes />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));
