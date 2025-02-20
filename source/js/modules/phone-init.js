const inputPhone = document.querySelectorAll('input[name="phone"]');

for (let i = 0; i < inputPhone.length; i++) {
  let startLength = 0;
  const initPhoneInput = () => {
    inputPhone[i].addEventListener('input', () => {
      const value = inputPhone[i].value.replace(/\D/g, '');
      const currentLength = inputPhone[i].value.length;

      if (currentLength < startLength) {
        startLength--;
        return;
      }

      inputPhone[i].value = '+7 ';

      if (currentLength > 1) {
        inputPhone[i].value += value.substring(1, 4);
      }

      if (currentLength >= 4) {
        inputPhone[i].value += ` ${value.substring(4, 7)}`;
      }

      if (currentLength >= 7) {
        inputPhone[i].value += `${value.substring(7, 9)}`;
      }

      if (currentLength >= 9) {
        inputPhone[i].value += `${value.substring(9, 11)}`;
      }

      startLength++;
    });
  };
  inputPhone[i].addEventListener('input', initPhoneInput);


  inputPhone[i].onfocus = function () {
    if (inputPhone[i].value === '') {
      inputPhone[i].value = '+7';
    }
  };

  inputPhone[i].onblur = function () {

    if (inputPhone[i].value === '+7') {
      inputPhone[i].value = '';
    }
  };
}
