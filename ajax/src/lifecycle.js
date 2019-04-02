import React from 'react';

export default class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0 };
  }

  componentDidMount() {
    // Here we'll start an AJAX request
    // this.req = $.get('...', () => {
    //   this.setState(...);
    // })
    this.clock = setInterval(() => {
      this.setState({ ticks: this.state.ticks + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    // this.req.abort();
    clearInterval(this.clock);
  }

  componentDidUpdate(nextProps, nextState) {
    // if (nextProps.id !=== this.props.id) {
    //   abort the previous request...
    //   create a new request...
    // }

  }

  render() {
    const { ticks } = this.state;

    return (
      <div>
        <p>Hello World. ticks = {ticks}</p>
      </div>
    );
  }
}

