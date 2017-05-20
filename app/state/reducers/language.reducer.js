import {SET_LANGUAGE} from '../actions/index.actions';

export default function language (state = {id: 'id', label: 'Portugese'}, action) {
  switch (action.type) {
  case SET_LANGUAGE: {
    return action.payload || state;
  }
  default:
    return state;
  }
}
