import React, { useState, useEffect } from 'react';

export default function GameComponent(props) {
  const { game } = props;
  const [state, setState] = useState(game.getStateForReactComponent());
  const { data, player } = state;

  function update() {
    setState(game.getStateForReactComponent());
  }

  const style = {
    display: 'inline-block',
    width: '100px',
    height: '100px',
    verticalAlign: 'top',
    lineHeight: '100px',
    textAlign: 'center',
    border: '1px solid',
  };

  function handleClick(ev) {
    const { rowIndex, colIndex } = ev.target.dataset;
    game.play(rowIndex, colIndex);
  }
    
  // onClick={() => play(rowIndex, colIndex)}

  return (
    <div className='game' style={{display: 'inline-block', margin: '10px'}}>
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
