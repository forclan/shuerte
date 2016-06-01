import DisplayBlock from './DisplayBlock';
import { Component, PropTypes } from 'react';

const msToMin(ms) {
  let sec = ms / 1000;
  return sec % 60 + 'min' + sec / 60 + 's';
}

class StartBlock extends Component {
  render() {
    // time(ms) width(num)
    let {width, style, onclick, time} = this.props;
    let dispText = 'Click To Start';
    if (time) {
      dispText += '\nused time' + msToMin(time);
    }
    return (
      <DisplayBlock width={width} height={height} style={style} dispText={text} onClick={onclick}/>
    )
  }
}

StartBlobk.propTypes = {
  width: PropTypes.number.isRequired,
  style; PropTypes.object,
  onclick: PropTypes.func.isRequired,
  time: PropTypes.number
}

export default StartBlock;
