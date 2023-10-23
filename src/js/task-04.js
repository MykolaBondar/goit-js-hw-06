let counterValue = 0;
const counterEl = document.querySelector('span#value');

const increaseBtnEl = document.querySelector('[data-action="increment"]');
const decreaseBtnEl = document.querySelector('[data-action="decrement"]');

const OnIncreaseBtnHandler = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
  console.log('Додаємо');
};
increaseBtnEl.addEventListener('click', OnIncreaseBtnHandler);

const OnDecreaseBtnHandler = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
  console.log('Віднімаємо');
};
decreaseBtnEl.addEventListener('click', OnDecreaseBtnHandler);
