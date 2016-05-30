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
    arr: state.arrayReducer.arr
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
const click = () => {
  console.log('block clicked');
}

class App extends Component {
  render() {
    let {arr, blockClick} = this.props;
    return (
      <DisplayTable blockClick={blockClick} blockRadix={4} shuffledArr={arr}/>
    );
  }
}

const OutApp = connect(mapStateToProps, mapActionsToProps)(App);

const store = createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

console.log(store.getState());
render(
  <Provider store={store} >
    <OutApp />
  </Provider>
  , document.getElementById('root')
)
