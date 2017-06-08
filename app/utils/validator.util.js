import each from 'lodash/each';
import isEmpty from 'lodash/isEmpty';
import {language} from '../config/language';

export const required = (values, fields, errors) => {
  each(fields, ((field) => {
    if ((!values[field] && values[field] !== 0) || isEmpty(values[field])) {
      errors[field] = language.VALIDATION__REQUIRED_FIELD;
    }
  }));
  return errors;
};

export const validateMobileNo = (values, fields, errors) => {
  each(fields, ((field) => {
    // checks if the mobile no only contains numbers and more than or equal to 6 character
    const mobileNoRegx = /^[0-9]{6,}$/;
    const result = mobileNoRegx.test(values[field]);
    if (!result) {
      errors[field] = language.VALIDATION__INCORRECT_USERNAME;
    }
  }));
  return errors;
};

export const validatePassword = (values, fields, errors) => {
  each(fields, ((field) => {
    // https://stackoverflow.com/a/21456918
    // Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
    const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const result = passwordRegx.test(values[field]);
    if (!result) {
      errors[field] = language.VALIDATION__INCORRECT_PASSWORD;
    }
  }));
  return errors;
};


export const validateEmail = (values, fields, errors) => {
  each(fields, ((field) => {
    // https:// emailregex.com/
    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailRegx.test(values[field]);
    if (!result) {
      errors[field] = language.VALIDATION__INCORRECT_EMAIL;
    }
  }));
  return errors;
};

export const validateNumber = (values, fields, errors) => {
  each(fields, ((field) => {
    // https:// emailregex.com/
    const numberR = (/(^[0-9]*$)/);
    const result = numberR.test(values[field]);
    if (!result) {
      errors[field] = language.VALIDATION__INCORRECT_NUMBER;
    }
  }));
  return errors;
};
