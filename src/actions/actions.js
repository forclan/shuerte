export const SHUFFLE = 'SHUFFLE';
export const SET_RADIX = 'SET_RADIX';
export const ARRAY_RESET = 'RESET_CLICK';
export const BLOCK_CLICK = 'BLOCK_CLICK';
export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
export const ACTION_START = 'ACTION_START';
export const ACTION_END = 'ACTION_END';

export const blockClick = (index) => ({
  type: BLOCK_CLICK,
  clickedIndex: index,
});

// generate Array [start, start + 1, ... start + count-1]
const getRange = (start, count) =>
  Array.apply(0, Array(count)).map((val, idx) =>
    idx + start
  );

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffleArr = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const switchIdx = getRandomIntInclusive(i, len - 1);
    const tmpVal = arr[switchIdx];
    /* eslint no-param-reassign: ["error", { "props": false }] */
    arr[switchIdx] = arr[i];
    arr[i] = tmpVal;
  }
  return arr;
};

export const shuffle = (len) => shuffleArr(getRange(1, len));

export const setRadix = (radix) => ({
  type: SET_RADIX,
  radix,
});

export const arrayReset = () => ({
  type: ARRAY_RESET,
});

export const start = (date) => ({
  type: ACTION_START,
  startTime: date,
});

export const end = (date) => ({
  type: ACTION_END,
  endTime: date,
});

export const setWindowSize = (width) => ({
  type: SET_WINDOW_SIZE,
  windowSize: width,
});
