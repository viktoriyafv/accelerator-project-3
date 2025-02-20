const formModal = document.querySelector('#form-modal');
const inputPhone = formModal.querySelector('#tel-modal');
const inputName = formModal.querySelector('#name-modal');
const inputSelect = formModal.querySelector('#city-modal');
const inputPolicy = formModal.querySelector('input[name="policy"]');
const inputCheckbox = formModal.querySelector('.modal__control-mark');
const submitFormModal = formModal.querySelector('.modal__button');
const modalInput = document.querySelectorAll('.modal__field');

submitFormModal.addEventListener('click', (evt) => {
  inputSelect.removeAttribute('readonly');

  if (!inputName.validity.valid) {
    inputName.classList.add('modal__field--error');

    return;
  } else {
    inputName.classList.remove('modal__field--error');
    inputName.setCustomValidity('');
  }

  if (!inputPhone.validity.valid) {
    inputPhone.classList.add('modal__field--error');

    return;
  } else {
    inputPhone.classList.remove('modal__field--error');
    inputPhone.setCustomValidity('');
  }

  if (inputSelect.value === '') {
    formModal.querySelector('.modal__select').classList.add('select--error');
    inputSelect.setCustomValidity('Заполните это поле');

    return;
  } else {
    formModal.querySelector('.modal__select').classList.remove('select--error');
    inputSelect.setCustomValidity('');
  }

  if (!inputPolicy.checked) {
    inputCheckbox.classList.add('form__control-mark--error');

    return;
  } else {
    inputCheckbox.classList.remove('form__control-mark--error');
    inputPolicy.setCustomValidity('');
  }

  if (inputName.validity.valid && inputPhone.validity.valid && inputSelect.value !== '' && inputPolicy.checked) {
    formModal.submit();

    evt.preventDefault();
    formModal.reset();
  }
});

function validateModalRestart() {
  for (let i = 0; i < modalInput.length; i++) {
    modalInput[i].addEventListener('input', () => {
      modalInput[i].classList.remove('modal__field--error');
    });
  }

  inputSelect.addEventListener('click', () => {
    formModal.querySelector('.modal__select').classList.remove('select--error');
    inputSelect.setCustomValidity('');
    inputSelect.setAttribute('readonly', 'true');
  });

  inputPolicy.addEventListener('input', () => {
    inputCheckbox.classList.remove('modal__control-mark--error');
  });
}

validateModalRestart();
