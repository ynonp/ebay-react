import React from 'react';

export default function connectedGame(ReactComponent) {
  return class ConnectedGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = props.game.getStateForReactComponent();
      this.update = this.update.bind(this);
    }

    update() {
      this.setState(this.props.game.getStateForReactComponent());
    }

    componentDidMount() {
      this.unsubscribe = this.props.game.subscribe(this.update);
    }

    componentDidUpdate(nextProps, nextState) {
      if (nextProps.game !== this.props.game) {
        if (this.unsubscribe) { this.unsubscribe() }
        this.unsubscribe = this.props.game.subscribe(this.update);
      }
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      return (
        <div className='outer'>
          <ReactComponent {...this.props} data={this.state.data} />
        </div>
      )
    }
  }
}