import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function DaysOfTheWeek(props) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return (
    <div>
      <label>
        Filter: <input type="text" />
      </label>
      <ul>
        <li>...</li>
      </ul>
    </div>
  )
}


function App(props) {
  return (
    <div>
      <DaysOfTheWeek />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
