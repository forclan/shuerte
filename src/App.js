import DisplayTable from './components/DisplayTable';
import Operation from './components/Operation';
import reducers from './reducers/click';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import * as actions from './actions/actions';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import finishMiddleware from './middleware/finishMiddleware';
import disableStart from './middleware/disableStart';

function mapStateToProps(state) {
  return {
    arr: state.arrayReducer.arr,
    width: state.windowReducer.windowSize,
    currentIdx: state.clickReducer.currentIdx,
    startTime: state.timeReducer.startTime,
    endTime: state.timeReducer.endTime,
    finished: state.timeReducer.endTime !== null,
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const createStoreWithMiddleware = applyMiddleware(finishMiddleware, disableStart)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension
  ? window.devToolsExtension()
  : f => f);

const containerStyle = {
  // width: window.innerWidth,
  // height: window.innerHeight,
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // border: '2px solid rgba(24, 16, 9, 0.92)',
};
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
      endTime,
    } = this.props;
    let style = {
      // display: 'flex',
      width,
      height: width,
      // justifyContent: 'center',
    };

    return (
      <div id="container" style={containerStyle}>
        <div style={style} onClick={() => start(new Date())}>
          <Operation
            currentIdx={currentIdx - 1}
            width={width / 5}
            reset={arrayReset}
            startTime={startTime}
            endTime={endTime}
          />
          <DisplayTable
            blockClick={blockClick}
            width={width}
            shuffledArr={arr}
          />
        </div>
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
  endTime: PropTypes.object.isRequired,
};
const AppMapStore = connect(mapStateToProps, mapActionsToProps)(App);

class OutApp extends Component {
  componentWillMount() {
    this.store = store;
  }
  render() {
    const { width, blockRadix } = this.props;
    return (
      <Provider store={this.store}>
        <AppMapStore blockRadix={blockRadix} />
      </Provider>
    );
  }
}
OutApp.propTypes = {
  width: PropTypes.number,
  blockRadix: PropTypes.number.isRequired,
};
render(
  <OutApp blockRadix={4} />,
document.getElementById('root'));

export default OutApp;
