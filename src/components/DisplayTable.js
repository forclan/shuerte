import React, { Component, PropTypes } from 'react';
import DisplayBlock from './DisplayBlock';
import radium from 'radium';

let blockStyle = {
  display: 'flex',
  flexGrow: 1,
  background: 'red',
  ':hover': {
    cursor: 'pointer',
  },
};

let tableStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};


class DisplayTable extends Component {
  render() {
    const { blockClick, width, shuffledArr } = this.props;
    const blockRadix = Math.sqrt(shuffledArr.length);
    tableStyle.width = width;
    tableStyle.height = width;
    let blockSize = width / blockRadix;
    const style = {
      width: blockSize, height: blockSize, justifyContent: 'center', alignItems: 'center',
    };
    // const blockSizePercent = blockSize / width;
    let displayBlocks = shuffledArr.map((val) =>
      <div key={val} style={style}>
        <DisplayBlock
          onClick={() => { blockClick(val); }}
          dispText={val.toString()}
          width={blockSize}
          height={blockSize}
          style={blockStyle}
        />
      </div>
    );
    return (
      <div id="disp-table" style={tableStyle}>
        {displayBlocks}
      </div>
    );
  }
}

DisplayTable.propTypes = {
  shuffledArr: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  blockClick: PropTypes.func.isRequired,
};

const exportRadiumTable = radium(DisplayTable);
export default exportRadiumTable;
