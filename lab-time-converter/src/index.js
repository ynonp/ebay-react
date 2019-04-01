import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TimeConverter(props) {
  const [ seconds, setSeconds ] = useState(0);

  const minutes = seconds / 60;
  const hours = seconds / 3600;

  const makeChangeHandler = (multiplier) => (e) => {
    setSeconds(e.target.value * multiplier);
  }

  /*
   * Same as:
  function makeChangeHandler(multiplier) {
    return function(e) {
      setSeconds(e.target.value * multiplier);
    }
  }
  */

  return (
    <div className='time-converter'>
      <label>
        Seconds: <input type='text' value={seconds} onChange={makeChangeHandler(1)} />
      </label>

      <label>
        Minutes: <input type='text' value={minutes} onChange={makeChangeHandler(60)} />
      </label>

      <label>
        Hours: <input type='text' value={hours} onChange={makeChangeHandler(3600)} />
      </label>
    </div>
  )
}

function App(props) {
  return (
    <div>
      <TimeConverter />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
