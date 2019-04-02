import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GameComponent from './game_component';
import GameLogic from './game';
import MovesCounter from './moves_counter_class';

const g = [
  new GameLogic(),
  new GameLogic(),
  new GameLogic()
];

function App(props) {
  const [idx, setIdx] = useState(0);

  return (
    <div>
      <MovesCounter game={g[idx]} />
      <button onClick={() => setIdx(0)}>1</button>
      <button onClick={() => setIdx(1)}>2</button>
      <button onClick={() => setIdx(2)}>3</button>
      <GameComponent game={g[idx]} />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
