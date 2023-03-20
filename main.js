const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeStyle = () => {
  const iteratorOptions = {
    colors: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    from: 0,
    to: 4,

    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (this.current === undefined) {
        this.current = this.from;
      }

      if (this.current < this.to + 1) {
        return { done: false, value: this.colors[this.current++] };
      }

      if (this.current >= this.to + 1) {
        this.current = 0;

        return {
          done: true,
          value: this.colors[this.current++],
        };
      }
    },
  };

  return (event) => {
    event.target.style.color = iteratorOptions.next().value;
  };
};

text1.addEventListener('click', changeStyle());
text2.addEventListener('click', changeStyle());
text3.addEventListener('click', changeStyle());
