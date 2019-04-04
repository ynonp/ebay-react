// src/logic/chat.js
import Immutable from 'immutable';
import { createStore } from 'redux';


const initialState = Immutable.fromJS({
  player: 'x',
  board: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
});

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

function reducer(state = initialState , action) {
  // action => { type: '...', payload: '...' }
  switch(action.type) {
    case 'PLAY':
      return play(state, action.payload);

    case 'NEW_GAME':
      return newGame(state, action.payload);

    default:
      return state;
  }
}

const store = createStore(reducer);
window.store = store;

export default store;














