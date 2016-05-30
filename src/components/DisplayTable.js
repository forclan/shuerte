import React, {Component, PropTypes} from 'react';
import DisplayBlock from './DisplayBlock';
import Radium from 'radium';

let blockStyle = {
  // textAlign: 'center',
  display: 'flex',
  flexGrow: 1,
  // width: '10%',
  background: 'red',
  ':hover': {
    cursor: 'pointer',
  }
}

let tableStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  // justifyContent: 'center',
  // alignItems: 'center'
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
    // blockStyle.width = double2PercentStr(blockSizePercent);
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
  // width: PropTypes.number.isRequired,
  // height: PropTypes.number.isRequired,
  blockRadix: PropTypes.number.isRequired,
  blockClick: PropTypes.func.isRequired
}

export default Radium(DisplayTable);
