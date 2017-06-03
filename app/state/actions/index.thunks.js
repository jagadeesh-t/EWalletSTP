import {NavigationActions} from 'react-navigation';
import {Toast} from '../../utils/RNHelpers.util';
import * as middleware from '../../utils/middleware.util';
import * as api from '../../utils/api.util';
import * as actions from '../actions/index.actions';
import {getErrorMessage} from '../../utils/transformer.util';
import result from 'lodash/result';

export const login = (username, password) => (dispatch) => {
  const payload = middleware.login(username, password);
  return api.login(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data.user', {})));
    dispatch(NavigationActions.navigate({routeName: 'Home'}));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const transfer = () => (dispatch) => {
  dispatch(NavigationActions.navigate({routeName: 'SendResult'}));
};

export const register = (phone, password, name, email, countryCode) => (dispatch) => {
  const payload = middleware.register(phone, password, name, email, countryCode);
  return api.register(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data', {})));
    dispatch(NavigationActions.navigate({routeName: 'Home'}));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};
