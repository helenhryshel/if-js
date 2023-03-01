const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  index: 0,

  next() {
    if (colors.index === colors.data.length) {
      colors.index = 0;
    }
    return { done: false, value: colors.data[colors.index++] };
  },
};

const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

text1.addEventListener('click', changeStyle('text1'));
text2.addEventListener('click', changeStyle('text2'));
text3.addEventListener('click', changeStyle('text3'));
