const GameLogic = {
  initialState() {
    return {
      player: 'x',
      data: [
        [' ', ' ', 'x'],
        [' ', 'o', 'o'],
        [' ', ' ', ' '],
      ],
    }
  },

  play(state, row, col) {
    const { data, player } = state;
    
    if (data[row][col] === ' ') {
      data[row][col] = player;
      return {
        data: data,
        player: player === 'x' ? 'o' : 'x',
      };
    }
    return state;
  },
};

export default GameLogic;
