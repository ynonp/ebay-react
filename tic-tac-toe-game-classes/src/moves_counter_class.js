import React from 'react';
import connectedGame from './game_listener';

class MovesCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const board = data;

    let moves = 0;
    for (let i=0; i < board.length; i++) {
      for (let j=0; j < board[i].length; j++) {
        if (board[i][j] !== ' ') {
          moves++;
        }
      }
    }

    return (
      <p>You moved so far {moves} times</p>
    )
  }
}

export default connectedGame(MovesCounter);