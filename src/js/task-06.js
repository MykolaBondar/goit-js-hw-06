const formEl = document.querySelector('input#validation-input');

const oInputValidationHandler = () => {
  if (formEl.value.length >= formEl.getAttribute('data-length')) {
    formEl.classList.add('valid');
    formEl.classList.remove('invalid');
  } else {
    formEl.classList.add('invalid');
    formEl.classList.remove('valid');
  }
};
formEl.addEventListener('blur', oInputValidationHandler);
