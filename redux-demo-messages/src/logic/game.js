// src/logic/chat.js
import Immutable from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './reducers/game';
import chatReducer from './reducers/chat';

const reducer = combineReducers({
  game: gameReducer,
  chat: chatReducer,
});

const store = createStore(reducer,  applyMiddleware(thunk));
window.store = store;

export default store;














