const rangeEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

const onInputHandler = () => {
  if (rangeEl.value <= textEl.getAttribute('min')) {
    textEl.style.fontSize = textEl.getAttribute('min') + 'px';
  } else if (rangeEl.value >= textEl.getAttribute('max')) {
    textEl.style.fontSize = textEl.getAttribute('max') + 'px';
  }
  textEl.style.fontSize = rangeEl.value + 'px';
};
rangeEl.addEventListener('input', onInputHandler);
