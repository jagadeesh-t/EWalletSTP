import * as Http from './http.util';

export const login = (loginPayload) =>
Http.post('LOGIN', loginPayload,
{});

export const signup = (signupPayload) =>
  Http.post('SIGNUP', signupPayload,
  {});

export const logout = () => Http.get('LOGOUT');

export const user = () => Http.get('USER');

export const getTransactions = (queryParams) => Http.get('TRANSACTIONHISTORY', queryParams);

export const confirmTransfer = (payload) =>
  Http.post('CONFIRMTRANSFER', payload, {});

export const transfer = (payload) =>
Http.post('TRANSACT', payload, {});

export const creditRequest = (payload) =>
Http.post('CREDITREQUEST', payload, {});

export const sendVerificationMessage = (payload) =>
Http.post('SENDVERIFICATIONMESSAGE', payload, {});

export const verifyPhone = (payload) =>
Http.post('VERIFYPHONE', payload, {});

export const changePassword = (payload) =>
Http.post('CHANGEPASSWORD', payload, {});

export const updateProfile = (payload) =>
Http.post('UPDATEPROFILE', payload, {});

export const updateDevicePushToken = (payload) => Http.post('UPDATEDEVICETOKEN', payload);
