import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import store from './logic/chat';
import User from './components/user';
import Renamer from './components/renamer';
import { Provider } from 'react-redux';

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
        <User />
        <Renamer/>
      </div>
    </Provider>
  )
}


ReactDOM.render(<App />, document.querySelector('main'));
