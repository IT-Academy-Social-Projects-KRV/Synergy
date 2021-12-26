import Regex from './regex';

const valEmail = {
  required: 'Field is required',
  minLength: {
    value: 5,
    message: 'At least 5 characters'
  },
  pattern: {
    value: Regex.email,
    message: 'Enter correct email'
  }
};

const valRequired = {
  required: 'Field is required',
  maxLength: { 
    value : 50,
    message: 'Max length 50 symbols'
  }
};

const valCapital = {
  required: 'Field is required',
  min: { value: 10, message: 'Min value 10' },
  max: { value: 2137483647, message: 'Max value 2 137 483 647' },
  valueAsNumber: true,
};

const valPassword = {
  required: 'Field is required',
  minLength: {
    value: 5,
    message: 'At least 5 characters'
  },
  // pattern: {
  //   value: Regex.password,
  //   message: 'At least 5 characters and one digit'
  // }
};

export { valEmail, valRequired, valCapital, valPassword }; 