import React from 'react';
import Block from './DisplayBlock';

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
    const {width, reset, currentIdx} = this.props;
    return (
      <div style={operationStyle}>
        <Block dispText={'reset'} style={blockStyle} width={width} height={width} />
        <Block dispText={'time'} style={blockStyle} width={width} height={width} />
        <Block dispText={currentIdx} style={blockStyle} width={width} height={width} />
      </div>
    );
  }
}

Operation.propTypes = {

}

export default Operation;
