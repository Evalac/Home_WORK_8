const formEl = document.querySelector('.feedback-form');

console.log(formEl);
formEl.addEventListener('click', onInput);

function onInput(evt) {
  evt.preventDefault();
  const formElement = evt.currentTarget.elements;
  console.log(formElement);
  console.dir(evt.target);
  if (evt.target.type !== 'email') {
    return;
  }
  console.log(evt.target.value);
  if (evt.target.nodeName !== 'TEXTAREA') {
    return;
  }
  console.log(evt.target.value);
}

//maslenok@mail.com
