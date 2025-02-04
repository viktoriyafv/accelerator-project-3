const modalWindow = document.querySelector('.modal');
const body = document.querySelector('.page-body');
const modalOpenButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__close-button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const openModalWindow = () => {
  modalWindow.classList.remove('visually-hidden');
  modalWindow.classList.add('modal--opened');
  body.classList.add('page-body--menu');
};

const closeModalWindow = () => {
  modalWindow.classList.add('visually-hidden');
  body.classList.remove('page-body--menu');
};

modalOpenButton.addEventListener('click', () => {
  openModalWindow();
});

modalCloseButton.addEventListener('click', () => {
  closeModalWindow();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();

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

