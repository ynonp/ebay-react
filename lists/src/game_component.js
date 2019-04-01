import React from 'react';

export default function GameComponent(props) {
  const data = [
    [' ', ' ', 'x'],
    [' ', 'o', 'o'],
    [' ', ' ', ' '],
  ];

  return (
    <div className='game'>
      {data.map((row) => (
        <div className='row'>
          {row.map((cell) => (
            <div className='cell'>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
