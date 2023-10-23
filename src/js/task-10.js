function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('#controls input');

const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const containerEl = document.querySelector('div#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let divEl = document.createElement('div');
    divEl.style.width = 30 + i * 10 + 'px';
    divEl.style.height = 30 + i * 10 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    containerEl.append(divEl);
  }
}

createBtnEl.addEventListener('click', onCreateBtnHandler);

function onCreateBtnHandler() {
  let amount = inputEl.value;
  console.log(
    '🚀 ~ file: task-10.js:26 ~ onCreateBtnHandler ~ amount:',
    amount
  );
  if (amount > 0) {
    createBoxes(amount);
  }
}

destroyBtnEl.addEventListener('click', onDestroyBtnHandler);

function onDestroyBtnHandler() {
  containerEl.innerHTML = '';
  inputEl.value = '';
}
