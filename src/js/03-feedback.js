const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);

formEl.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

function onInput(evt) {
  evt.preventDefault();
  const formElement = evt.currentTarget.elements;
  //   console.log(formElement);
  // console.dir(evt.target);
  if (evt.target.type === 'email') {
    const emailStorage = JSON.stringify(evt.target.value);
    localStorage.setItem('email', emailStorage);
    return;
  }
  if (evt.target.nodeName === 'TEXTAREA') {
    const massagStorage = JSON.stringify(evt.target.value);
    localStorage.setItem('message', massagStorage);
    return;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const formData = new FormData(evt.currentTarget);
  formData.forEach((value, name) => {
    console.log('name: ', name);
    console.log('value: ', value);
  });
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
}

const loadFromStorage = () => {
  const savedEmail = JSON.parse(localStorage.getItem('email'));
  console.log(savedEmail);
  const savedMessage = JSON.parse(localStorage.getItem('message'));
  console.log(savedMessage);
};

loadFromStorage();
