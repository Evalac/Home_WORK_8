const formEl = document.querySelector('.feedback-form');

console.log(formEl);
formEl.addEventListener('submit', onInput);

function onInput(evt) {
  evt.preventDefault();
  const formElement = evt.currentTarget.elements;
  console.log(formElement);
}

//maslenok@mail.com
