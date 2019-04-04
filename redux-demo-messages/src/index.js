import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import store from './logic/chat';
import store from './logic/game';
import User from './components/user';
import Renamer from './components/renamer';
import { Provider } from 'react-redux';
import GameComponent from './components/game';

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <GameComponent/>
        <GameComponent/>
        <h1>Hello World</h1>
      </div>
    </Provider>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
