import DisplayTable from './components/DisplayTable';
import Operation from './components/Operation';
import reducers from './reducers/click';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import * as actions from './actions/actions';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

function mapStateToProps(state) {
  return {
    arr: state.arrayReducer.arr,
    width: state.windowReducer.windowSize,
    currentIdx: state.clickReducer.currentIdx,
    startTime: state.timeReducer.startTime,
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const store = createStore(reducers, window.devToolsExtension
  ? window.devToolsExtension()
  : f => f);

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatchRadix.bind(this);
  }

  componentWillMount() {
    const { blockRadix, setRadix } = this.props;
    this.dispatchRadix(setRadix, blockRadix);
  }

  dispatchRadix(action, val) {
    action(val);
  }

  render() {
    const {
      start,
      arrayReset,
      arr,
      blockClick,
      width,
      currentIdx,
      startTime,
    } = this.props;
    let style = {
      width,
      height: width,
    };

    return (
      <div style={style} onClick={() => start(new Date())}>
        <Operation
          currentIdx={currentIdx - 1}
          width={width / 5}
          reset={arrayReset}
          startTime={startTime}
        />
        <DisplayTable blockClick={blockClick} width={width} shuffledArr={arr} />
      </div>
    );
  }
}
App.propTypes = {
  blockRadix: PropTypes.number.isRequired,
  setRadix: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  arrayReset: PropTypes.func.isRequired,
  arr: PropTypes.array.isRequired,
  blockClick: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  currentIdx: PropTypes.number.isRequired,
  startTime: PropTypes.object.isRequired,
};
const OutApp = connect(mapStateToProps, mapActionsToProps)(App);

render(
  <Provider store={store}>
    <OutApp blockRadix={3} />
  </Provider>,
// <DisplayBlock onClick={null} dispNum={10} style={blockStyle} width={'100px'} height={'100px'}/>
  document.getElementById('root')
);
