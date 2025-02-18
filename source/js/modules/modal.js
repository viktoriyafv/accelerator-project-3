import { selectOption } from './dropdown.js';

const modalWindow = document.querySelector('.modal');
const body = document.querySelector('.page-body');
const modalOpenButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalInput = document.querySelectorAll('.modal__field');
const dropdownInput = document.querySelectorAll('.dropdown__field');

const isEscapeKey = (evt) => evt.key === 'Escape';

const openModalWindow = () => {
  modalWindow.classList.remove('visually-hidden');
  modalWindow.classList.add('modal--opened');
  body.classList.add('page-body--menu');
  selectOption();
};

const closeModalWindow = () => {

  modalWindow.classList.add('visually-hidden');
  body.classList.remove('page-body--menu');

};

modalOpenButton.addEventListener('click', () => {
  for (let i = 0; i < dropdownInput.length; i++) {
    dropdownInput[i].value = '';
  }

  openModalWindow();
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  for (let i = 0; i < modalInput.length; i++) {
    modalInput[i].value = '';
  }

  for (let i = 0; i < dropdownInput.length; i++) {
    dropdownInput[i].value = '';
  }

  closeModalWindow();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();

    for (let i = 0; i < modalInput.length; i++) {
      modalInput[i].value = '';
    }

    for (let i = 0; i < dropdownInput.length; i++) {
      dropdownInput[i].value = '';
    }

    closeModalWindow();
  }
});

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const itsModal = target === modalWindow || modalWindow.contains(target);
  const itsmodalOpenButton = target === modalOpenButton;
  const modalIsActive = modalWindow.classList.contains('modal--opened');

  if (!itsModal && !itsmodalOpenButton && modalIsActive) {
    closeModalWindow();
  }
});

const formModal = document.querySelector('#form-modal');
const inputPhone = formModal.querySelector('#tel-modal');
const inputName = formModal.querySelector('#name-modal');
const inputSelect = formModal.querySelector('#city-modal');
const inputPolicy = formModal.querySelector('input[name="policy"]');
const inputCheckbox = formModal.querySelector('.modal__control-mark');
const submitFormModal = formModal.querySelector('.modal__button');

submitFormModal.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (!inputName.validity.valid) {
    inputName.classList.add('modal__field--error');
  } else {
    inputName.classList.remove('modal__field--error');
  }

  if (!inputPhone.validity.valid) {
    inputPhone.classList.add('modal__field--error');
  } else {
    inputPhone.classList.remove('modal__field--error');
  }

  if (inputSelect.value === '') {
    inputSelect.classList.add('modal__field--error');
  } else {
    inputSelect.classList.remove('modal__field--error');
  }

  if (!inputPolicy.checked) {
    inputCheckbox.classList.add('form__control-mark--error');
  } else {
    inputCheckbox.classList.remove('form__control-mark--error');
  }

  if (inputName.validity.valid && inputPhone.validity.valid && inputSelect.value !== '' && inputPolicy.checked) {
    formModal.submit();
    formModal.reset();
  }
});

function validateModalRestart() {
  for (let i = 0; i < modalInput.length; i++) {
    modalInput[i].addEventListener('focus', () => {
      modalInput[i].classList.remove('modal__field--error');
    });
  }

  inputPolicy.addEventListener('input', () => {
    inputCheckbox.classList.remove('modal__control-mark--error');
  });
}

validateModalRestart();
