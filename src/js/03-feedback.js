const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);

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

const loadFromStorage = () => {
  const savedEmail = JSON.parse(localStorage.getItem('email'));
  console.log(savedEmail);
  const savedMessage = JSON.parse(localStorage.getItem('message'));
  console.log(savedMessage);
};

loadFromStorage();

//maslenok@mail.com
