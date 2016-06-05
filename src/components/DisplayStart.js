import DisplayBlock from './DisplayBlock';
import React, { Component, PropTypes } from 'react';


/* eslint quotes: ["error", "backtick", {"avoidEscape": true}] */
/* eslint-disable no-unused-vars */
function msToMin(ms) {
  const sec = ms / 1000;
/* eslint-enable no-unused-vars */
  // const result = (sec % 60) + 'min'  + (sec / 60) + 's';
  const result = `(sec % 60)min-(sec / 60)s`;
  return result;
}

class StartBlock extends Component {
  render() {
    // time(ms) width(num)
    const { width, style, onclick, time } = this.props;
    let dispText = `Click To Start`;
    if (time) {
      dispText += `\nused time $msToMin(time)`;
    }
    return (
      <DisplayBlock
        width={width}
        height={width}
        style={style}
        dispText={dispText}
        onClick={onclick}
      />
    );
  }
}

StartBlock.propTypes = {
  width: PropTypes.number.isRequired,
  style: PropTypes.object,
  onclick: PropTypes.func.isRequired,
  time: PropTypes.number,
};

export default StartBlock;
