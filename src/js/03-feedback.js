import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;

form.addEventListener('input', throttle(onFormInput, 1000));
form.addEventListener('submit', onFormSubmit);

populeteTextarea();

function onFormInput(event) {
  savedForm = { email: email.value, message: message.value };
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
}


function onFormSubmit(event) {
  event.preventDefault();
    if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function populeteTextarea() {
  if (savedForm) {
  }
  email.value = savedForm.email || '';
  message.value = savedForm.message || '';
}
