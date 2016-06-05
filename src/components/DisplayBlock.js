import React, { Component, PropTypes } from 'react';
import radium from 'radium';

class DisplayBlock extends Component {
  render() {
    const { onClick, dispText, style, width, height } = this.props;
    style.fontSize = '2em';
    style.width = width;
    style.height = height;
    style.alignItems = 'center';
    style.justifyContent = 'center';
    style.border = '1px dashed';
    return (
      <div onClick={onClick} style={style}>
        <div>
          {dispText}
        </div>
      </div>
    );
  }
}

DisplayBlock.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  dispText: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const RadiumDisplayBlock = radium(DisplayBlock);
export default RadiumDisplayBlock;
