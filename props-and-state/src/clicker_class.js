import React from 'react';

export default class Clicker extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((oldState) => (
      { clicks: oldState.clicks + 1 }
    ));
  }

  render() {
    const { clicks } = this.state;
    return (
      <>
        <p>You clicked {clicks} times</p>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}

