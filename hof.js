function counter() {
  let count = 0;
  return function count () {
    return count++;
  };
}

// function add(a,b) {
//   return a + b;
// }

// function partialAdd(a) {
//   return function(b) {
//     return add(a, b);
//   };
// }

function add(a, b, c) {
  return a + b + c;
}

function partialAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b,c);
    };
  };
}

function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

function curryMultiply(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return function(e) {
          return multiply(a, b, c, d, e);
        }
      }
    }
  }
}

function memo(fn) {
  let lastArgs = null;
  let lastResult = null;
  return function () {
    const args = [...arguments];
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      return lastResult;
    }
      lastArgs = args;
      lastResult = fn(...args);
      return lastResult;
  }
}



module.exports = {
  counter,
  add,
  partialAdd,
  curryAdd,
  multiply,
  curryMultiply
};