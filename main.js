const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeStyle = () => {
  let index = 0;

  const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],

    next() {
      if (index === colors.data.length) {
        index = 0;
      }
      return { done: false, value: colors.data[index++] };
    },
  };

  return (event) => {
    event.target.style.color = colors.next().value;
  };
};

text1.addEventListener('click', changeStyle());
text2.addEventListener('click', changeStyle());
text3.addEventListener('click', changeStyle());
