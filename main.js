let user = 'John Doe';
console.log(user);
const student = 'Helen Hryshel';
console.log(student);

user = student; // будет Helen Hryshel
console.log(user);

let test = 1;
test += 1;
test = test + '1'; // будет 21
console.log(test);
test = test - 1; // будет 20
console.log(test);
test = test < 4; // будет false
console.log(test);

const array = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < array.length; i++) {
  result = result * array[i];
}
console.log(result);

const array2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] > 5 && array2[i] < 10) {
    console.log(array2[i]);
  }
}

for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(array2[i]);
  }
}
