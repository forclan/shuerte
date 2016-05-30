import {combineReducers} from 'redux';
import * as dataStore from '../actions/actions';

function arrayReducer(state = {radix: 4, arr: null}, action) {
  if (state.arr === null) {
    state.arr = dataStore.shuffle(state.radix * state.radix);
  }
  switch (action.type) {
    case dataStore.RESET:
      return {
        radix: state.radix,
        arr: dataStore.shuffle(state.radix * state.radix)
      }
      break;
    case dataStore.SET_RADIX:
      return {
        radix: action.radix,
        arr: dataStore.shuffle(action.radix * action.radix)
      }
    case dataStore.SHUFFLE:
      return {
        radix: state.radix,
        arr: dataStore.shuffle(action.radix * action.radix)
      }
    default:
      return state;
  }
}

function clickReducer(state = {currentIdx: 1}, action) {
  switch (action.type) {
    case dataStore.BLOCK_CLICK:
      if (action.clickedIndex === state.currentIdx)
        return {
          currentIdx: state.currentIdx + 1
        }
      else {
        return {
          currentIdx: state.currentIdx
        }
      }
      break;
    default:
      return state
  }
}

export default combineReducers({
  clickReducer,
  arrayReducer
});
