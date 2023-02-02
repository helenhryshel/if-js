const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};

const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};

const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const equal = (object1, object2) => {
    for (const key in object1) {
      if (
        typeof object1[key] === 'object' &&
        typeof object2[key] === 'object'
      ) {
        equal(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key])
          return false;
      }
    }
  };

  return equal(object1, object2) !== false && equal(object2, object1) !== false;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
