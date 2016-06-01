import {combineReducers} from 'redux';
import * as dataStore from '../actions/actions';

function windowReducer(state = {windowSize: 400}, action) {
  switch (action.type) {
    case dataStore.SET_WINDOW_SIZE:
      return {
        windowSize: action.windowSize
      }
      break;
    default:
      return state
  }
}


function arrayReducer(state = {radix: 4, arr: null}, action) {
  if (state.arr === null) {
    state.arr = dataStore.shuffle(state.radix * state.radix);
  }
  switch (action.type) {
    case dataStore.ARRAY_RESET:
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

function timeReducer(state = {startTime: null, endTime: null}, action) {
  switch (action.type) {
    case dataStore.ACTION_START:
      return {
        startTime: state.startTime === null ? action.startTime : state.startTime,
        endTime: null
      };
    case dataStore.ACTION_END:
      return {
        startTime: state.startTime,
        endTime: action.time
      };
    case dataStore.TIME_RESET:
      return {
        startTime: null,
        endTime: null
      }
    default:
      return state;
  }
}

function clickReducer(state = {currentIdx: 1, startTime: null, endTime: null}, action) {
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
  arrayReducer,
  windowReducer,
  timeReducer
});
