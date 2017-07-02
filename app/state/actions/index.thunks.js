import {NavigationActions} from 'react-navigation';
import {Toast} from '../../utils/RNHelpers.util';
import * as middleware from '../../utils/middleware.util';
import * as api from '../../utils/api.util';
import * as actions from '../actions/index.actions';
import {getErrorMessage} from '../../utils/transformer.util';
import result from 'lodash/result';
import {language} from '../../config/language';
import {deviceInfo} from '../../utils/device.util';

export const login = (username, password) => (dispatch) => {
  const {deviceId} = deviceInfo;
  const payload = middleware.prepareLogin(username, password, deviceId);
  return api.login(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data.user', {})));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err), err.disableToast);
  });
};

export const logout = () => (dispatch) => {
  api.logout().then(() => {
    Toast.show('Logged out successfuly !');
  }).catch((err) => {
    Toast.show(getErrorMessage(err), err.disableToast);
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
  dispatch(actions.setTransferResult(transferModalDetails));
  const payload = middleware.prepareTransfer(transferInfo.payeePhone, transferInfo.amount);
  return api.transfer(payload).
  then((res) => {
    const transferResponse = middleware.transformTransferResponse(res.data);
    dispatch(actions.setTransferResult({
      ...transferModalDetails,
      ...transferResponse,
      ...{status: 'SUCCESS'}}));
    dispatch(NavigationActions.navigate({routeName: 'SendResult'}));
  }).catch((err) => {
    const errTransferResponse = middleware.transformErrorTransferResponse(err);
    Toast.show(getErrorMessage(err), err.disableToast);
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
    Toast.show(getErrorMessage(err), err.disableToast);
  });
};

export const signup = () => (dispatch, getState) => {
  const state = getState();
  const {mobileNo, password, countryCode, name, email} = result(state, 'form.register.values', {});
  const otp = result(state, 'form.smsOtpForm.values.otp', null);
  const {deviceId, deviceName} = deviceInfo;
  const payload = middleware.prepareSignup(mobileNo, password, countryCode, name, email, otp, deviceId, deviceName);
  return api.signup(payload).
  then(() => dispatch(login(mobileNo, password))).
  catch((err) => {
    Toast.show(getErrorMessage(err, language.ERROR__SIGNUP_FAILED), err.disableToast);
  });
};

export const getUser = () => (dispatch) => {
  const defaultUserData = {};
  return api.user().
  then((res) => dispatch(actions.populateUser(result(res, 'data', defaultUserData)))).
  catch((err) => {
    Toast.show(getErrorMessage(err), err.disableToast);
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
    Toast.show(getErrorMessage(err), err.disableToast);
    return Promise.resolve();
  });
};

export const sendVerificationMessage = (phone, countryCode, actionOnSubmit) => (dispatch) => {
  const payload =  middleware.prepareVerificationRequest(phone, countryCode);
  return api.sendVerificationMessage(payload).then(() => {
    dispatch(NavigationActions.navigate({routeName: 'SmsOtpModal', params: {actionOnSubmit}}));
  }).catch((err) => {
    Toast.show(getErrorMessage(err, 'Error Processing the Request'), err.disableToast);
  });
};

export const createCreditRequest = (transactionId) => (dispatch, getState) => {
  const userProfile = result(getState(), 'user.userProfile', {});
  const payload = middleware.prepareCreditRequest(userProfile.id, transactionId);
  return api.creditRequest(payload).then(() => {
    Toast.show(language.CREDIT_REQUEST__REQUEST_PROCESSED);
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err, 'Error Processing the Request'), err.disableToast);
  });
};

export const chanagePassword = (currentPassword, newPassword) => (dispatch, getState) => {
  const userPhone = result(getState(), 'user.phone', {});
  const payload = middleware.prepareLogin(userPhone, currentPassword);
  const changePassPayload = middleware.prepareChangePassword(newPassword);
  return api.login(payload).then(() => {
    api.changePassword(changePassPayload);
    Toast.show(language.SETTINGS__SUCCESSFUL_PASSWORD_CHANGE);
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err), err.disableToast);
  });
};

export const updateProfile = (payload) => (dispatch) => api.updateProfile(payload).then(() => {
  Toast.show(language.PROFILE__SUCCESSFUL_UPDATE);
  api.user().
    then((res) => dispatch(actions.populateUser(result(res, 'data', {}))));
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})]
  }));
}).catch((err) => {
  Toast.show(getErrorMessage(err), err.disableToast);
});
