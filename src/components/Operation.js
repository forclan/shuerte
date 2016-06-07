import React, { PropTypes } from 'react';
import Block from './DisplayBlock';
import Timer from './Timer';

const operationStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const blockStyle = {
  display: 'flex',
  background: 'rgba(73, 190, 49, 0.67)',
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
        <Block dispText={'reset'} onClick={reset} style={blockStyle} width={width} height={width} />
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
  startTime: PropTypes.object.isRequired,
  endTime: PropTypes.object.isRequired,
};

export default Operation;
