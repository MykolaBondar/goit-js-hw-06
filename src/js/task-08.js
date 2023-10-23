const formEl = document.querySelector('.login-form');
const mailEl = formEl.firstChild;
const passwordEl = formEl.lastChild;
const submitBtnEl = document.querySelector('button');

formEl.addEventListener('submit', onSubmitHandler);
function onSubmitHandler(event) {
  event.preventDefault();
  const formEl = event.target;
  const password = formEl.elements.password.value;
  const mail = formEl.elements.email.value;
  if (mail === '' || password === '') {
    alert('Please fill in all the fields!');
  }

  console.log(`{${formEl.elements.email.name}: ${mail}, 
  ${formEl.elements.password.name}: ${password}}`);
  formEl.reset();
}
