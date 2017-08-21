import {SET_LANGUAGE} from '../actions/index.actions';
import {currentLangState} from '../../config/language';

export default function language (state = {langCode: currentLangState.langCode}, action) {
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
