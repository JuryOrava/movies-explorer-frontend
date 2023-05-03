import { validate } from 'react-email-validator';

export function validationForm(thisInput, btn, inputList) {
    let thisLabel = thisInput.parentNode;
    let validateMassage = thisLabel.querySelector('.input__error_massage');
    let validArr = [];

    if (thisInput.id === 'email') {
      if (!validate(thisInput.value)) {
        validateMassage.classList.add('sign__input_massage_active');
        btn.setAttribute('disabled', true);
        if (!btn.classList.contains('btn-form_deactive')){
            btn.classList.add('btn-form_deactive')
        }
      } else {
        validateMassage.classList.remove('sign__input_massage_active');
        inputList.forEach(input => validArr.push(input.validity.valid))
        let isInvalid = validArr.some((input) => !input);
        if(!isInvalid) {
            btn.removeAttribute('disabled');
            btn.classList.remove('btn-form_deactive');
        }
      }
    } else {
      if (!thisInput.validity.valid) {
        validateMassage.classList.add('sign__input_massage_active');
        btn.setAttribute('disabled', true);
        if (!btn.classList.contains('btn-form_deactive')){
            btn.classList.add('btn-form_deactive')
        }
      } else {
        validateMassage.classList.remove('sign__input_massage_active');
        inputList.forEach(input => validArr.push(input.validity.valid))
        let isInvalid = validArr.some((input) => !input)
        !isInvalid && btn.removeAttribute('disabled');
        btn.classList.remove('btn-form_deactive');
      }
    }
  }