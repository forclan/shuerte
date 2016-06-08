import React, { PropTypes } from 'react';
import Block from './DisplayBlock';
import Timer from './Timer';

const operationStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  background: 'rgba(40, 127, 143, 0.54)',
  justifyContent: 'space-between',
};

const blockStyle = {
  display: 'flex',
  // background: 'rgba(14, 164, 204, 0.26)',
  borderRadius: '2px',
  ':hover': {
    cursor: 'pointer',
  },
};

class Operation extends React.Component {
  render() {
    const { width, reset, currentIdx, startTime, endTime } = this.props;
    const finishedFlag = endTime !== null;
    return (
      <div style={operationStyle}>
        <Block
          dispText={finishedFlag ? 'Start' : 'Reset'}
          onClick={reset}
          style={blockStyle}
          width={width}
          height={width}
        />
        <Timer
          startTime={startTime}
          endTime={endTime}
          style={blockStyle}
          width={width}
          height={width}
        />
        <Block
          dispText={finishedFlag ? 'Done' : currentIdx.toString()}
          style={blockStyle}
          width={width}
          height={width}
        />
      </div>
    );
  }
}

Operation.propTypes = {
  width: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
  startTime: PropTypes.object,
  endTime: PropTypes.object,
};

export default Operation;
