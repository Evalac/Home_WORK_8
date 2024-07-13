const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const formElement = evt.currentTarget.elements;
  //   console.log(formElement);
  // console.dir(evt.target);
  if (evt.target.type !== 'email') {
    console.log('mail', evt.target.value);
    return;
  }
  if (evt.target.nodeName !== 'TEXTAREA') {
    console.log('textarea', evt.target.value);
    return;
  }
}

//maslenok@mail.com
