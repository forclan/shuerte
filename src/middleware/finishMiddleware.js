import * as actions from '../actions/actions.js';

const finishMiddleware = store => next => action => {
  let localAction = action;
  if (action.type === actions.BLOCK_CLICK) {
    const clickReducer = store.clickReducer;
    if (clickReducer.totalNum === clickReducer.currentIdx
      && action.clickedIndex === clickReducer.totalNum) {
      localAction = {
        type: action.ACTION_END,
        endTime: new Date(),
      };
    }
  }
  return next(localAction);
};

export default finishMiddleware;
