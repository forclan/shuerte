import { ACTION_START } from '../actions/actions';
const disableStart = store => next => action => {
  const state = store.getState();
  if (state.timeReducer.startTime !== null && action.type === ACTION_START) {
    return store;
  }
  return next(action);
};

export default disableStart;
