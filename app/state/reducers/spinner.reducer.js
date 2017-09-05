import {SET_SPINNER_ACTIVE, SET_SPINNER_INACTIVE} from '../actions/index.actions';

export default function spinner (state = {visible: false}, action) {
  switch (action.type) {
  case SET_SPINNER_ACTIVE: {
    return {
      visible: true
    };
  }
  case SET_SPINNER_INACTIVE: {
    return {
      visible: false
    };
  }
  default:
    return state;
  }
}
