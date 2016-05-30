import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

class DisplayBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {onClick, dispNum, style, width, height} = this.props;
    style.fontSize = '2em';
    // style.verticalAlign = '50%';
    return (
      <div onClick={onClick} style={style}>
        <span>
          {dispNum}
        </span>
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
