import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds:0 };
  }
  tick() {
    this.setState((state) => {
      return {
        seconds: state.seconds + 1
      }
    });
  }
  componentDidMount() {
    console.log('--- in componentDidMount');
    this.timerHandle = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    console.log('--- in componentWillUnmount');
    clearInterval(this.timerHandle);
  }
  render() {
    return (
      <div>
        Seconds passed: { this.state.seconds }
      </div>
    )
  }
}

export default Clock;
