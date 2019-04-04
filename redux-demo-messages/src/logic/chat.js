// src/logic/chat.js
import Immutable from 'immutable';
import { createStore } from 'redux';


const initialState = Immutable.fromJS({
  rooms: [
    { id: 0, name: 'Lobby', current: true },
    { id: 1, name: 'The-Club' },

    { id: 2, name: 'Food and Drinks' },
    { id: 3, name: 'Life etc.' }
  ],
  messages: [
    { from: 'joe', text: 'Morning all' },
    { from: 'jane', text: 'Hi joe' }
  ],
  username: 'jack',
  otherUsers: [ 'joe', 'jane' ]
});


function reducer(state = initialState , action) {
  // action => { type: '...', payload: '...' }
  switch(action.type) {
    case 'RENAME':
      return state.set('username', action.payload);

    default:
      return state;
  }
}

const s1 = reducer(initialState, { type: 'RENAME', payload: 'ynon'});
console.log(s1.toJS());

const store = createStore(reducer);

export default store;














