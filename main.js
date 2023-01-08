function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(2)(4));



const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function getColor() {
  let i = 0;
  return function () {
    this.style.color = colors[i];
    i++;
    if (i > 4) {
      i = 0;
    }
  };
}

text1.addEventListener('click', getColor());

text2.addEventListener('click', getColor());

text3.addEventListener('click', getColor());
