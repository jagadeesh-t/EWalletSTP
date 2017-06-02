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

export const validateUsername = (values, fields, errors) => {
  each(fields, ((field) => {
    const userNameRegx = /^\d+$/;
    const result = userNameRegx.test(values[field]);
    if (!result) {
      errors[field] = language.VALIDATION__INCORRECT_USERNAME;
    }
  }));
  return errors;
};
