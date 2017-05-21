import {SET_LANGUAGE} from '../actions/index.actions';

export default function language (state = {langCode: 'en'}, action) {
  switch (action.type) {
  case SET_LANGUAGE: {
    return {
      langCode: action.payload
    };
  }
  default:
    return state;
  }
}
