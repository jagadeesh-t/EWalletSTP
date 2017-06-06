import map from 'lodash/map';
import result from 'lodash/result';
import * as constants from '../config/constants.config';

// OUTGOING
export const prepareLogin = (phone, password) => ({
  'phone': phone,
  'password': password
});

export const prepareRegister = (phone, password, name, email, countryCode) => ({
  'name': name,
  'phone': phone,
  'password': password,
  'email': email,
  'country_code': countryCode
});


// INCOMING
export const transformTransactionHistory = (transactionList, currentUser) => {
  const userPhone = result(currentUser, 'phone', null);
  if (!userPhone) {
    return []; // just to make sure if phone doesnt exist
  }
  return map(transactionList, (eachTransaction) => {
    const transactionFrom = result(eachTransaction, 'from_account.phone', null);
    let transactionHistoryType = constants.TH_CREDIT;
    if (transactionFrom === userPhone) {
      transactionHistoryType = constants.TH_DEBIT;
    }
    return {
      ...eachTransaction,
      transactionHistoryType,
      date: eachTransaction.updatedAt
    };
  });
};
