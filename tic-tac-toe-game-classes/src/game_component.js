import React, { useState } from 'react';
import game from './game';

export default function GameComponent(props) {
  // const { game } = props;
  const [state, setState] = useState(game.initialState());
  const { data, player } = state;

  const style = {    
    display: 'inline-block',
    width: '100px',
    height: '100px',
    verticalAlign: 'top',
    lineHeight: '100px',
    textAlign: 'center',
    border: '1px solid',
  }

  function handleClick(ev) {
    const { rowIndex, colIndex } = ev.target.dataset;
    setState(game.play(state, rowIndex, colIndex));
  }
    
  // onClick={() => play(rowIndex, colIndex)}

  return (
    <div className='game'>
      {data.map((row, rowIndex) => (
        <div className='row'>
          {row.map((cell, colIndex) => (
            <div
              className='cell'
              style={style}
              onClick={handleClick}
              data-row-index={rowIndex}
              data-col-index={colIndex}
            >{cell}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
