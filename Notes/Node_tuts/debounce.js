const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// Practice
const debouncing = (cb, delay) => {
  let timeID;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeID = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
