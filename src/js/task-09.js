function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.body;

btnEl.addEventListener('click', onButtonHandler);
function onButtonHandler() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = `${bodyEl.style.backgroundColor}`;
}
