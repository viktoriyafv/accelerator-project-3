const dropdownInput = document.querySelector('.dropdown__field');
const dropdown = document.querySelector('.dropdown');
const options = document.querySelectorAll('.dropdown__option-text');
const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

dropdownInput.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');

  for (let i = 0; i < options.length; i++) {
    options[i].tabIndex = 0;
  }

});

dropdownInput.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    dropdownInput.focus();
    dropdown.classList.add('dropdown--active');
    for (let i = 0; i < options.length; i++) {
      options[i].tabIndex = 0;
    }
  }

  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    dropdown.classList.remove('dropdown--active');
    for (let i = 0; i < options.length; i++) {
      options[i].tabIndex = -1;
    }
  }
});

const selectOption = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (evt) => {

      const n = evt.target.textContent;
      dropdownInput.value = n;

      dropdown.classList.remove('dropdown--active');
    });

    options[i].addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        dropdownInput.focus();
        const n = evt.target.textContent;
        dropdownInput.value = n;

        dropdown.classList.remove('dropdown--active');
      }
    });
  }
};


selectOption();
