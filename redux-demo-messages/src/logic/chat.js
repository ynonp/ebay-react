// src/logic/chat.js
import Immutable from 'immutable';
import { createStore } from 'redux';


const s1 = reducer(initialState, { type: 'RENAME', payload: 'ynon'});
console.log(s1.toJS());

const store = createStore(reducer);

export default store;














