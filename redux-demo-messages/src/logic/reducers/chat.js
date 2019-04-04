// reducers/chat
import Immutable from 'immutable';

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


export default function reducer(state = initialState , action) {
  // action => { type: '...', payload: '...' }
  switch(action.type) {
    case 'RENAME':
      return state.set('username', action.payload);

    default:
      return state;
  }
}

