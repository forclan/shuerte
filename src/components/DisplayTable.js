import React, {Component, PropTypes} from 'react';
import DisplayBlock from './DisplayBlock';



let blockStyle = {
  textAlign: 'center',
  flexGrow: 1,
  width: '10%',
  ':hover': {
    cursor: 'pointer'
  }
}

let tableStyle = {
  display: 'flex',
  flexWrap: 'wrap'
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
    blockStyle.width = double2PercentStr(blockSizePercent);
    // console.log(blockClick(1));
    let displayBlocks = shuffledArr.map((val) => {
      return (<DisplayBlock onClick={() => {blockClick(val)}} key={val} dispNum={val} width={blockSize} height={blockSize} style={blockStyle}/>)
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

export default DisplayTable;
