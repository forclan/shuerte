import React, {Component, PropTypes} from 'react';
import DisplayBlock from './DisplayBlock';
import Radium from 'radium';

let blockStyle = {
  display: 'flex',
  flexGrow: 1,
  background: 'red',
  ':hover': {
    cursor: 'pointer',
  }
}

let tableStyle = {
  display: 'flex',
  flexWrap: 'wrap',
}

const double2PercentStr = (val) => {
  return val * 100 + '%';
}

class DisplayTable extends Component {
  render() {
    let {blockClick, width, shuffledArr} = this.props;
    let blockRadix = Math.sqrt(shuffledArr.length);
    tableStyle.width = width;
    tableStyle.height = width;
    let blockSize = width / blockRadix;
    let blockSizePercent = blockSize / width;
    let displayBlocks = shuffledArr.map((val) => {
      return (
        <div key={val} style={{width:blockSize, height:blockSize, justifyContent:'center',alignItems:'center'}}>
          <DisplayBlock onClick={() => {blockClick(val)}} dispNum={val} width={blockSize} height={blockSize} style={blockStyle}/>
        </div>
      )
    })
    return (
      <div id='disp-table' style={tableStyle}>
        {displayBlocks}
      </div>
    )
  }
}

DisplayBlock.PropTypes = {
  blockRadix: PropTypes.number.isRequired,
  blockClick: PropTypes.func.isRequired
}

export default Radium(DisplayTable);
