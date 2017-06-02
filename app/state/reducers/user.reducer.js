import {POPULATE_USER} from '../actions/index.actions';

export default function user (state = {}, action) {
  switch (action.type) {
  case POPULATE_USER: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
