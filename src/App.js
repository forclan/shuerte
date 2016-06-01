import DisplayBlock from './components/DisplayBlock';
import DisplayTable from './components/DisplayTable';
import reducers from './reducers/click';
import {createStore, bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';
import * as actions from './actions/actions';
import React, {
  Component
} from 'react'
import {
  render
} from 'react-dom';

function mapStateToProps(state) {
  return {
    arr: state.arrayReducer.arr,
    width: state.windowReducer.windowSize
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatchRadix.bind(this);
  }

  dispatchRadix(action, val) {
    action(val);
  }

  componentWillMount() {
    let {arr, blockClick, width, blockRadix, setRadix} = this.props;
    this.dispatchRadix(setRadix, blockRadix);
  }

  render() {
    let {start, arr, blockClick, width, blockRadix, setRadix, finishFlag} = this.props;
    let style = {
      width: width,
      height: width
    };

    return (
      <div style={style} onClick={() => start(new Date())}>
      <DisplayTable blockClick={blockClick} width={width} shuffledArr={arr}/>
      </div>
    );
  }
}

const OutApp = connect(mapStateToProps, mapActionsToProps)(App);



let blockStyle = {
  display: 'flex',
  flexGrow: 1,
  background: 'red',
  ':hover': {
    cursor: 'pointer',
  }
}

render(
  <Provider store={store} >
    <OutApp blockRadix={3} />
  </Provider>

  // <DisplayBlock onClick={null} dispNum={10} style={blockStyle} width={'100px'} height={'100px'}/>
  , document.getElementById('root')
)
