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
    console.log(JSON.parse(localStorage.getItem('email')));
    return;
  }
  if (evt.target.nodeName === 'TEXTAREA') {
    const massagStorage = JSON.stringify(evt.target.value);
    localStorage.setItem('Message', massagStorage);
    console.log(JSON.parse(localStorage.getItem('Message')));
    return;
  }
}

//maslenok@mail.com
