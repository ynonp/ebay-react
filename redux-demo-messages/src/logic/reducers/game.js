// reducers/game
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    player: 'x',
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
  },
);

function play(state, { row, col }) {
  if (state.getIn(['board', row, col]) === ' ') {
    const player = state.getIn(['player']);
    return state.
    setIn(['board', row, col], player).
    setIn(['player'], player === 'x' ? 'o' : 'x');
  }
  return state;
}

function newGame(state) {
  return initialState;
}

export default function reducer(state = initialState , action) {
  // action => { type: '...', payload: '...' }
  // return handlers[action.type](state, action.payload);
  switch(action.type) {
    case 'PLAY':
      return play(state, action.payload);

    case 'NEW_GAME':
      return newGame(state, action.payload);

    default:
      return state;
  }
}
