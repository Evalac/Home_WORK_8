import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onFormEvent, 500));

function onFormEvent(evt) {
  formData[evt.target.name] = evt.target.value; // створює ключ в обекті і додає до нього значення
  // console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  pasteTextOnLocalStorage(evt);
}

function pasteTextOnLocalStorage(evt) {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  evt.target.value = savedMessage;
}

function onSubmit(evt) {
  evt.preventDefault();

  evt.target.reset(); // ресет форми после сабміта

  localStorage.removeItem('feedback-form-state');
}

// const formEl = document.querySelector('.feedback-form');

// formEl.addEventListener('input', onInput);

// formEl.addEventListener('submit', onFormSubmit);

// const STORAGE_KEY = 'feedback-form-state';

// function onInput(evt) {
//   evt.preventDefault();
//   const formElement = evt.currentTarget.elements;
//   //   console.log(formElement);
//   // console.dir(evt.target);
//   if (evt.target.type === 'email') {
//     const emailStorage = JSON.stringify(evt.target.value);
//     localStorage.setItem('email', emailStorage);
//     return;
//   }
//   if (evt.target.nodeName === 'TEXTAREA') {
//     const massagStorage = JSON.stringify(evt.target.value);
//     localStorage.setItem('message', massagStorage);
//     return;
//   }
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.dir(evt.currentTarget);
//   const formData = new FormData(evt.currentTarget);
//   formData.forEach((value, name) => {
//     console.log('name: ', name);
//     console.log('value: ', value);
//   });
//   localStorage.removeItem(STORAGE_KEY);
//   formEl.reset();
// }

// const loadFromStorage = () => {
//   const savedEmail = JSON.parse(localStorage.getItem('email'));
//   console.log(savedEmail);
//   const savedMessage = JSON.parse(localStorage.getItem('message'));
//   console.log(savedMessage);
// };

// loadFromStorage();
