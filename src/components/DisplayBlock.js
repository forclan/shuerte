import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

class DisplayBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {onClick, dispText, style, width, height} = this.props;
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
};

DisplayBlock.PropTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  dispNum: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

DisplayBlock = Radium(DisplayBlock);
export default DisplayBlock;
