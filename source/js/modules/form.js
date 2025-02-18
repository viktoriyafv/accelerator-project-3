import { selectOption } from './dropdown.js';

const form = document.querySelector('#form');
const inputPhone = form.querySelector('#tel');
const inputName = form.querySelector('#name');
const inputSelect = form.querySelector('#city');
const inputPolicy = form.querySelector('input[name="policy"]');
const inputCheckbox = form.querySelector('.form__control-mark');
const submitForm = form.querySelector('.form__button');
const formInput = form.querySelectorAll('.form__field');

inputSelect.addEventListener('focus', (event) => {
  event.preventDefault();

  selectOption();
  inputSelect.classList.remove('form__field--error');
});

submitForm.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (!inputName.validity.valid) {
    inputName.classList.add('form__field--error');
  } else {
    inputName.classList.remove('form__field--error');
  }

  if (!inputPhone.validity.valid) {
    inputPhone.classList.add('form__field--error');
  } else {
    inputPhone.classList.remove('form__field--error');
  }

  if (inputSelect.value === '') {
    inputSelect.classList.add('form__field--error');
  } else {
    inputSelect.classList.remove('form__field--error');
  }

  if (!inputPolicy.checked) {
    inputCheckbox.classList.add('form__control-mark--error');
  } else {
    inputCheckbox.classList.remove('form__control-mark--error');
  }

  if (inputName.validity.valid && inputPhone.validity.valid && inputSelect.value !== '' && inputPolicy.checked) {
    form.submit();
    form.reset();
  }
});

function validateRestart() {
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].addEventListener('focus', () => {
      formInput[i].classList.remove('form__field--error');
    });
  }

  inputPolicy.addEventListener('input', () => {
    inputCheckbox.classList.remove('form__control-mark--error');
  });
}

validateRestart();
