import { selectOption } from './select.js';

const form = document.querySelector('#form');
const inputPhone = form.querySelector('#tel');
const inputName = form.querySelector('#name');
const inputMessage = form.querySelector('#message');
const inputSelect = form.querySelector('#city');
const inputPolicy = form.querySelector('input[name="policy"]');
const inputCheckbox = form.querySelector('.form__control-mark');
const submitForm = form.querySelector('.form__button');
const formInput = form.querySelectorAll('.form__field');

inputSelect.addEventListener('focus', (evt) => {
  evt.preventDefault();

  selectOption();
  inputSelect.classList.remove('form__field--error');
});

submitForm.addEventListener('click', (evt) => {
  inputSelect.removeAttribute('readonly');

  if (!inputName.validity.valid) {
    inputName.classList.add('form__field--error');
    inputName.setCustomValidity('');

    return;
  } else {
    inputName.classList.remove('form__field--error');
    inputName.setCustomValidity('');
  }

  if (!inputPhone.validity.valid) {
    inputPhone.classList.add('form__field--error');

    return;
  } else {
    inputPhone.classList.remove('form__field--error');
    inputPhone.setCustomValidity('');
  }

  if (!inputMessage.validity.valid) {
    inputMessage.classList.add('form__field--error');

    return;
  } else {
    inputMessage.classList.remove('form__field--error');
    inputMessage.setCustomValidity('');
  }

  if (inputSelect.value === '') {
    form.querySelector('.form__select').classList.add('select--error');
    inputSelect.setCustomValidity('Заполните это поле');

    return;
  } else {
    form.querySelector('.form__select').classList.remove('select--error');
    inputSelect.setCustomValidity('');
  }

  if (!inputPolicy.checked) {
    inputCheckbox.classList.add('form__control-mark--error');

    return;
  } else {
    inputCheckbox.classList.remove('form__control-mark--error');
    inputPolicy.setCustomValidity('');
  }

  if (inputName.validity.valid && inputPhone.validity.valid && !inputSelect.value === '' && inputPolicy.checked) {
    form.submit();

    evt.preventDefault();
    form.reset();
  }
});

function validateRestart() {
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].addEventListener('input', () => {
      formInput[i].classList.remove('form__field--error');
      formInput[i].setCustomValidity('');
    });
  }

  inputSelect.addEventListener('click', () => {
    form.querySelector('.form__select').classList.remove('select--error');
    inputSelect.setCustomValidity('');
    inputSelect.setAttribute('readonly', 'true');
  });

  inputPolicy.addEventListener('input', () => {
    inputCheckbox.classList.remove('form__control-mark--error');
  });
}

validateRestart();
