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

class App extends Component {

  render() {
    let {arr, blockClick, width} = this.props;
    return (
      <DisplayTable blockClick={blockClick} width={width} blockRadix={4} shuffledArr={arr}/>
    );
  }
}

const OutApp = connect(mapStateToProps, mapActionsToProps)(App);

const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

render(
  <Provider store={store} >
    <OutApp />
  </Provider>
  , document.getElementById('root')
)
