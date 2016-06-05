import { combineReducers } from 'redux';
import * as dataStore from '../actions/actions';

function windowReducer(state = { windowSize: 400 }, action) {
  switch (action.type) {
    case dataStore.SET_WINDOW_SIZE:
      return {
        windowSize: action.windowSize,
      };
    default:
      return state;
  }
}

function arrayReducer(state = { radix: 4, arr: null }, action) {
  let shuffleArr = null;
  if (state.arr === null) {
    shuffleArr = dataStore.shuffle(state.radix * state.radix);
  }
  switch (action.type) {
    case dataStore.ARRAY_RESET:
      return {
        radix: state.radix,
        arr: dataStore.shuffle(state.radix * state.radix),
      };
    case dataStore.SET_RADIX:
      return {
        radix: action.radix,
        arr: dataStore.shuffle(action.radix * action.radix),
      };
    case dataStore.SHUFFLE:
      return {
        radix: state.radix,
        arr: dataStore.shuffle(action.radix * action.radix),
      };
    default:
      return {
        radix: state.radix,
        arr: shuffleArr || state.arr,
      };
  }
}

function timeReducer(state = { startTime: null, endTime: null }, action) {
  switch (action.type) {
    case dataStore.ACTION_START:
      return {
        startTime: state.startTime === null ? action.startTime : state.startTime,
        endTime: null,
      };
    case dataStore.ACTION_END:
      return {
        startTime: state.startTime,
        endTime: action.time,
      };
    case dataStore.ARRAY_RESET:
      return {
        startTime: null,
        endTime: null,
      };
    default:
      return state;
  }
}

function clickReducer(state = { currentIdx: 1 }, action) {
  switch (action.type) {
    case dataStore.BLOCK_CLICK: {
      let currentIdx = null;
      if (action.clickedIndex === state.currentIdx) {
        currentIdx = state.currentIdx + 1;
      } else {
        currentIdx = state.currentIdx;
      }
      return {
        currentIdx,
      };
    }
    case dataStore.ARRAY_RESET: {
      return {
        currentIdx: 1,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  clickReducer,
  arrayReducer,
  windowReducer,
  timeReducer,
});
