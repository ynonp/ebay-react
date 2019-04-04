import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { rename } from '../logic/actions';

const names = ['one', 'two', 'three', 'four'];

function Renamer(props) {
  function shuffle() {
    props.dispatch(rename(_.sample(names)));
  }

  return (
    <button onClick={shuffle}>Rename</button>
  )
}

export default connect()(Renamer);