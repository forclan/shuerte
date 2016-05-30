export const SHUFFLE = 'SHUFFLE';
export const SET_RADIX = 'SET_RADIX';
export const RESET = 'RESET_CLICK';
export const BLOCK_CLICK = 'BLOCK_CLICK';

export const blockClick = (index) => {
  console.log(index);
  return {
    type: BLOCK_CLICK,
    clickedIndex: index
  };
};

// generate Array [start, start + 1, ... start + count-1]
const getRange = (start, count) => {
  return Array.apply(0, Array(count)).map((val, idx) => {
    return idx + start;
  })
};

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArr = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let switchIdx = getRandomIntInclusive(i, len - 1);
    let tmpVal = arr[switchIdx];
    arr[switchIdx] = arr[i];
    arr[i] = tmpVal;
  }
  return arr;
};

export const shuffle = (len) => {
  return shuffleArr(getRange(1, len));
};

export const setRadix = (radix) => {
  return {
    type: SET_RADIX,
    radix: radix
  }
};

export const reset = () => {
  return {
    type: RESET
  };
};
