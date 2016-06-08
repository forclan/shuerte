import React, { Component, PropTypes } from 'react';
import Block from './DisplayBlock';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      elapsed: 0,
    };
  }

  componentWillMount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }
  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }
  render() {
    const { style, width, height, startTime, endTime } = this.props;
    let elapsed = 0;
    if (startTime !== null) {
      elapsed = Math.round((this.state.currentTime - startTime) / 100);
    }
    if (endTime !== null) {
      elapsed = Math.round((endTime - startTime) / 100);
    }
    const seconds = (elapsed / 10).toFixed(1);
    return (
      <Block dispText={seconds.toString()} style={style} width={width} height={height} />
    );
  }
}
Timer.propTypes = {
  style: PropTypes.object.isRequired,
  startTime: PropTypes.object,
  endTime: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Timer;
