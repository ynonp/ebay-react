class TicTacToeGame {
  constructor() {
    this.data = [
      ['x', ' ', ' '],
      [' ', 'o', ' '],
      [' ', ' ', ' '],
    ]
  }

  play(player, row, col) {
    if (this.data[row][col] === ' ') {
      this.data[row][col] = player;
    }
  }
}

const g = new TicTacToeGame();
g.play('x', 0, 0);
g.play('o', 0, 1);

