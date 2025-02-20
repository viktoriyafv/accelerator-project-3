import { selectOption, closeSelectOptions } from './select.js';

const modalWindow = document.querySelector('.modal');
const body = document.querySelector('.page-body');
const modalOpenButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalInput = document.querySelectorAll('.modal__field');
const selectInput = document.querySelectorAll('.select__field');

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
  for (let i = 0; i < selectInput.length; i++) {
    selectInput[i].value = '';
  }

  openModalWindow();
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  for (let i = 0; i < modalInput.length; i++) {
    modalInput[i].value = '';
  }

  for (let i = 0; i < selectInput.length; i++) {
    selectInput[i].value = '';
  }

  closeModalWindow();
  closeSelectOptions();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();

    for (let i = 0; i < modalInput.length; i++) {
      modalInput[i].value = '';
    }

    for (let i = 0; i < selectInput.length; i++) {
      selectInput[i].value = '';
    }

    closeModalWindow();
  }
});

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const itsModal = target === modalWindow || modalWindow.contains(target);
  const itsModalOpenButton = target === modalOpenButton;
  const modalIsActive = modalWindow.classList.contains('modal--opened');

  if (!itsModal && !itsModalOpenButton && modalIsActive) {
    closeModalWindow();
  }
});
