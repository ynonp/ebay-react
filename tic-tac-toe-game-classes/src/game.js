class Game {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    this.player = 'x';
    this.listeners = [];
  }

  notify() {
    this.listeners.forEach(callback => {
      callback();
    });
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    }
  }

  getStateForReactComponent() {
    return {
      data: this.board,
      player: this.player,
    }
  }

  play(row, col) {
    if (this.board[row][col] === ' ') {
      this.board[row][col] = this.player;
      this.player = (this.player === 'x' ? 'o' : 'x');
      this.notify();
    }
  }
}

export default Game;
