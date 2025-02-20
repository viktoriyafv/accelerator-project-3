const selectInput = document.querySelectorAll('.select__field');
const selectOptions = document.querySelectorAll('.select__option');
const options = document.querySelectorAll('.select__option-text');
const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const closeSelectOptions = () => {
  for (let i = 0; i < selectInput.length; i++) {
    selectInput[i].classList.remove('select__field--active');
    selectOptions[i].classList.add('visually-hidden');

    for (let j = 0; j < options.length; j++) {
      options[j].tabIndex = -1;
    }
  }
};


for (let i = 0; i < selectInput.length; i++) {
  selectInput[i].addEventListener('click', () => {
    selectInput[i].classList.toggle('select__field--active');

    selectOptions[i].classList.toggle('visually-hidden');

    for (let j = 0; j < options.length; j++) {
      options[j].tabIndex = 0;
    }
  });

  selectInput[i].addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      selectInput[i].focus();
      selectInput[i].classList.add('select__field--active');
      selectOptions[i].classList.remove('visually-hidden');
      for (let j = 0; j < options.length; j++) {
        options[j].tabIndex = 0;
      }
    }


    if (isEscapeKey(evt)) {
      evt.stopPropagation();
      closeSelectOptions();
    }

  });

  document.addEventListener('click', (evt) => {
    const target = evt.target;
    const itsSelect = target === selectInput[i] || selectInput[i].contains(target);
    const modalIsActive = selectInput[i].classList.contains('select__field--active');

    if (!itsSelect && modalIsActive) {
      closeSelectOptions();
    }
  });
}

const selectOption = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (evt) => {

      const n = evt.target.textContent;

      for (let j = 0; j < selectInput.length; j++) {
        selectInput[j].value = n;

        selectInput[j].classList.remove('select__field--active');
      }
      for (let k = 0; k < selectOptions.length; k++) {
        selectOptions[k].classList.add('visually-hidden');
      }
    });

    options[i].addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        for (let j = 0; j < selectInput.length; j++) {
          selectInput[j].focus();
          const n = evt.target.textContent;
          selectInput[j].value = n;

          selectInput[j].classList.remove('select__field--active');
        }
        for (let k = 0; k < selectOptions.length; k++) {
          selectOptions[k].classList.add('visually-hidden');
        }
      }
    });
  }
};

export { selectOption, closeSelectOptions };
