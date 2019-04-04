import React, { useState } from 'react';
import { connect } from 'react-redux';

function GameComponent(props) {
  const { data, player } = props;

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
    return props.dispatch({
      type: 'PLAY',
      payload: { row: rowIndex, col: colIndex },
    });
  }

  // onClick={() => play(rowIndex, colIndex)}

  return (
    <div className='game'>
      <p>Current player {player}</p>
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

function mapStateToProps(state) {
  return {
    data: state.get('board'),
    player: state.get('player'),
  }
}

export default connect(mapStateToProps)(GameComponent);

















