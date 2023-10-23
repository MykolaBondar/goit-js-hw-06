const formEl = document.querySelector('input#name-input');

const outputEl = document.querySelector('span#name-output');

const onInputHandler = () => {
  outputEl.textContent = formEl.value;

  if (formEl.value === '') {
    outputEl.textContent = 'Anonymous';
  }
};
formEl.addEventListener('input', onInputHandler);
