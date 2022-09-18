const throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

// Practice
const throtteling = (cb, delay) => {
  let lastFire = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    lastFire = now;
    return cb(...args);
  };
};
