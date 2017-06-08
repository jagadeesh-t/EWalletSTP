import * as Http from './http.util';

export const login = (loginPayload) =>
Http.post('LOGIN', loginPayload,
  {additional: ['FTXID']});

export const register = (registerPayload) =>
  Http.post('REGISTER', registerPayload,
    {additional: ['FTXID']});

export const logout = () => Http.get('LOGOUT');

export const user = () => Http.get('USER');

export const getTransactions = () => Http.get('TRANSACTIONHISTORY');

export const confirmTransfer = (payload) =>
  Http.post('CONFIRMTRANSFER', payload, {additional: ['FTXID']});

export const transfer = (payload) =>
Http.post('TRANSACT', payload, {additional: ['FTXID']});
