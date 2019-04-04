import React from 'react';
import { connect } from 'react-redux';
import { createRandomMessage } from "../logic/actions/chat";

function Chat(props) {
  const { messages } = props;

  return (
    <ul>
      <button onClick={
        () => props.dispatch(createRandomMessage)}
      >Add Random Message</button>
      {messages.map(msg => (
        <li>
          <b>{msg.get('from')}: </b>
          {msg.get('text')}
        </li>
      ))}
    </ul>
  )

}

function mapStateToProps(state) {
  return {
    messages: state.chat.get('messages'),
  };
}

export default connect(mapStateToProps)(Chat);
