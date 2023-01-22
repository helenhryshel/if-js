function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('wow'));

console.log('---------');

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(33, 5));

console.log('---------');

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(max(23, 55));

console.log('---------');

const min2 = (a, b) => (a < b ? a : b); // функция min  с тернарным оператором
console.log(min2(33, 5));

const max2 = (a, b) => (a > b ? a : b); // функция max  с тернарным оператором
console.log(max2(23, 55));

console.log('---------');

function replaceElement(array) {
  for (let i = 0; i < array.length; i++) {
    if (String(array[i]).includes('0')) {
      array[i] = String(array[i]).replace(/0/g, 'zero');
    }
  }
  return array;
}

console.log(replaceElement([23, 55, 10, 100, 2, 8, 70, 1, 60, 80]));
