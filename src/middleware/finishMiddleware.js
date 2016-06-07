import * as actions from '../actions/actions.js';

const finishMiddleware = store => next => action => {
  let localAction = action;
  const state = store.getState();
  const totalNum = state.arrayReducer.arr.length;
  if (action.type === actions.BLOCK_CLICK) {
    const clickReducer = state.clickReducer;
    // console.log(totalNum + ' ' + clickReducer.currentIdx + ' ' + action.clickedIndex);
    if (totalNum === clickReducer.currentIdx
      && action.clickedIndex === totalNum) {
      localAction = {
        type: actions.ACTION_END,
        endTime: new Date(),
      };
    }
  }
  return next(localAction);
};

export default finishMiddleware;
