const dropdownInput = document.querySelectorAll('.dropdown__field');
const dropdownOptions = document.querySelectorAll('.dropdown__option');
const options = document.querySelectorAll('.dropdown__option-text');
const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';


for (let i = 0; i < dropdownInput.length; i++) {
  dropdownInput[i].addEventListener('click', () => {
    dropdownInput[i].classList.toggle('dropdown__field--active');

    dropdownOptions[i].classList.toggle('visually-hidden');

    for (let j = 0; j < options.length; j++) {
      options[j].tabIndex = 0;
    }
  });

  dropdownInput[i].addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      dropdownInput[i].focus();
      dropdownInput[i].classList.add('dropdown__field--active');
      dropdownOptions[i].classList.remove('visually-hidden');
      for (let j = 0; j < options.length; j++) {
        options[j].tabIndex = 0;
      }
    }


    if (isEscapeKey(evt)) {
      evt.stopPropagation();
      dropdownInput[i].classList.remove('dropdown__field--active');
      dropdownOptions[i].classList.add('visually-hidden');
      for (let j = 0; j < options.length; j++) {
        options[j].tabIndex = -1;
      }
    }

  });
}
const selectOption = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (evt) => {

      const n = evt.target.textContent;

      for (let j = 0; j < dropdownInput.length; j++) {
        dropdownInput[j].value = n;

        dropdownInput[j].classList.remove('dropdown__field--active');
      }
      for (let k = 0; k < dropdownOptions.length; k++) {
        dropdownOptions[k].classList.add('visually-hidden');
      }
    });

    options[i].addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        for (let j = 0; j < dropdownInput.length; j++) {
          dropdownInput[j].focus();
          const n = evt.target.textContent;
          dropdownInput[j].value = n;

          dropdownInput[j].classList.remove('dropdown__field--active');
        }
        for (let k = 0; k < dropdownOptions.length; k++) {
          dropdownOptions[k].classList.add('visually-hidden');
        }
      }
    });
  }
};

export { selectOption };
