import React from 'react';
import { connect } from 'react-redux';

function User(props) {
  return (
    <h1>Welcome {props.username}</h1>
  )
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.get('username'),
  }
}

export default connect(mapStateToProps)(User);

