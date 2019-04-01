import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GameComponent from './game_component';


function DaysOfTheWeek(props) {
  const [filter, setFilter] = useState('');
  const [roll, setRoll] = useState(0);

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  days = days.slice(roll).concat(days.slice(0, roll));
  
  return (
    <div>
      <label>
        Filter: <input type="text" onChange={(e) => setFilter(e.target.value)} />
      </label>
      <button onClick={() => setRoll((roll + 1) % days.length)}>Roll</button>
      <ul>
        {days.filter(day => day.toLowerCase().includes(filter.toLowerCase())).map(day => (
          <li key={day}>
            <input type="checkbox" />
            {day}
          </li>
        ))}
      </ul>
    </div>
  )
}


function App(props) {
  return (
    <div>
      <GameComponent />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
