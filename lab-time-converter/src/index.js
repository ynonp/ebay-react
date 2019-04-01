import React from 'react';
import ReactDOM from 'react-dom';

function TimeConverter(props) {
  return (
    <div className='time-converter'>
      <label>
        Seconds: <input type='text' />
      </label>

      <label>
        Minutes: <input type='text' />
      </label>

      <label>
        Hours: <input type='text' />
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
