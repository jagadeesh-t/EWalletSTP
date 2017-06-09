import {NavigationActions} from 'react-navigation';
import {Toast} from '../../utils/RNHelpers.util';
import * as middleware from '../../utils/middleware.util';
import * as api from '../../utils/api.util';
import * as actions from '../actions/index.actions';
import {getErrorMessage} from '../../utils/transformer.util';
import result from 'lodash/result';
import {language} from '../../config/language';


export const login = (username, password) => (dispatch) => {
  const payload = middleware.prepareLogin(username, password);
  return api.login(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data.user', {})));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const logout = () => (dispatch) => {
  api.logout().then(() => {
    Toast.show('Logged out successfuly !');
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
  return dispatch(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})]
  }));
};

export const transfer = (transferInfo) => (dispatch) => {
  const transferModalDetails = {
    amount: transferInfo.amount,
    fee: transferInfo.fee,
    status: 'PROGRESS',
    transactionId: null,
    payeeName: transferInfo.payeeName,
    payeePhone: transferInfo.payeePhone
  };
  console.log(transferModalDetails);
  dispatch(actions.setTransferResult(transferModalDetails));
  dispatch(NavigationActions.navigate({routeName: 'SendResult'}));
  const payload = middleware.prepareTransfer(transferInfo.payeePhone, transferInfo.amount);
  return api.transfer(payload).
  then((res) => {
    console.log(res);
    const transferResponse = middleware.transformTransferResponse(res.data);
    dispatch(actions.setTransferResult({
      ...transferModalDetails,
      ...transferResponse,
      ...{status: 'SUCCESS'}}));
  }).catch((err) => {
    console.log(err);
    const errTransferResponse = middleware.transformErrorTransferResponse(err);
    Toast.show(getErrorMessage(err));
    dispatch(actions.setTransferResult({
      ...transferModalDetails,
      ...errTransferResponse,
      ...{status: 'FAILED'}}));
  });
};


export const confirmTransfer = (mobileNo, amount) => (dispatch) => {
  const payload = middleware.prepareConfirmTransfer(mobileNo, amount);
  return api.confirmTransfer(payload).then((res) => {
    const transactionDetails = middleware.transformConfirmTransfer(result(res, 'data', {}));
    dispatch(NavigationActions.navigate({routeName: 'SendConfirmation', params: {transactionDetails}}));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const register = (phone, password, name, email, countryCode) => (dispatch) => {
  const payload = middleware.prepareRegister(phone, password, name, email, countryCode);
  return api.register(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data', {})));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const getUser = () => (dispatch) => {
  const defaultUserData = {};
  return api.user().
  then((res) => dispatch(actions.populateUser(result(res, 'data', defaultUserData)))).
  catch((err) => {
    Toast.show(getErrorMessage(err));
    return Promise.resolve();
  });
};

export const getTransactions = () => (dispatch, getState) => {
  const currentUser = result(getState(), 'user', {});
  return api.getTransactions().
  then((res) => {
    const transactionList = middleware.transformTransactionHistory(res.data, currentUser);
    dispatch(actions.updateTransactions(transactionList));
  }).
  catch((err) => {
    Toast.show(getErrorMessage(err));
    return Promise.resolve();
  });
};


export const createCreditRequest = (transactionId, creditStatus) => (dispatch, getState) => {
  const userProfile = result(getState(), 'user.userprofile', {});
  const payload = middleware.prepareCreditRequest(userProfile.id, transactionId, creditStatus);
  return api.creditRequest(payload).then(() => {
    Toast.show(language.REQUEST__PROCESSED);
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });
};

