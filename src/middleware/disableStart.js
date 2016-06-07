import { ACTION_START } from '../actions/actions';
const disableStart = store => next => action => {
  const state = store.getState();
  let nextState = next(action);
  if (action.type === ACTION_START) {
    const timeReducer = state.timeReducer;
    if (timeReducer.startTime !== null) {
      if (timeReducer.endTime === null) {
        nextState = store;
      }
    }
  }
  return nextState;
};

export default disableStart;
