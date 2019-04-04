// src/logic/chat.js
import Immutable from 'immutable';
import { createStore, combineReducers } from 'redux';

import gameReducer from './reducers/game';
import chatReducer from './reducers/chat';

const reducer = combineReducers({
  game: gameReducer,
  chat: chatReducer,
});

const store = createStore(reducer);
window.store = store;

export default store;














