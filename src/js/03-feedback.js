import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onFormEvent, 500));
pasteTextOnLocalStorage();

function onFormEvent(evt) {
  formData[evt.target.name] = evt.target.value; // створює ключ в обекті і додає до нього значення
  // console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function pasteTextOnLocalStorage() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMessage) {
    Object.entries(savedMessage).forEach(([name, value]) => {
      if (refs.form.elements[name]) {
        refs.form.elements[name].value = value;
        formData[name] = value;
      }
    });
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset(); // ресет форми после сабміта

  localStorage.removeItem('feedback-form-state');
}
