import {SET_REGISTER_DETAILS} from '../actions/index.actions';

export default function setRegistrationDetails (state = {}, action) {
  switch (action.type) {
  case SET_REGISTER_DETAILS: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
