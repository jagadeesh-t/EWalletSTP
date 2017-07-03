import map from 'lodash/map';
import result from 'lodash/result';
import * as constants from '../config/constants.config';
import {removeFalsy} from './transformer.util';
// OUTGOING
export const prepareLogin = (phone, password) => ({
  'phone': phone,
  'password': password
});

export const prepareSignup = (phone, password, countryCode, name, email, code) => ({
  'phone': phone,
  'password': password,
  'countryCode': countryCode,
  'name': name,
  'email': email,
  'code': code
});

export const prepareConfirmTransfer = (mobileNo, amount) => ({
  'toPhone': mobileNo,
  'amount': amount
});

export const prepareTransfer = (mobileNo, amount) => ({
  'toPhone': mobileNo,
  'amount': amount
});

// INCOMING
export const transformTransactionHistory = (transactionList, currentUser) => {
  const userPhone = result(currentUser, 'phone', null);
  if (!userPhone) {
    return []; // just to make sure if phone doesnt exist
  }
  return map(transactionList, (eachTransaction) => {
    const transactionFrom = result(eachTransaction, 'fromAccount.phone', null);
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

export const transformConfirmTransfer = (transactionInfo) => {
  const {amount = '--', totalAmount = '--', fee = 0, toAccount = {}} = transactionInfo;
  const payeeName = result(toAccount, 'userProfile.name', '--');
  const payeePhone = result(toAccount, 'phone', '--');
  return {
    'payeeName': String(payeeName),
    'payeePhone': String(payeePhone),
    'amount': String(amount),
    'totalAmount': String(totalAmount),
    'fee': String(fee)
  };
};

export const transformTransferResponse = (rawTransferResponse) => {
  const transferResponse = removeFalsy(rawTransferResponse);
  return {
    amount: transferResponse.amount,
    fee: transferResponse.fee,
    totalAmount: transferResponse.totalAmount,
    transactionId: transferResponse.id,
  // payeeName: transferResponse.payeeName, //TODO
  // payeePhone: transferResponse.payeePhone
  };
};


export const transformErrorTransferResponse = (err) => {
  const {transferDetails} = err;
  const transferResponse = removeFalsy(transferDetails);
  return {
    amount: transferResponse.amount,
    fee: transferResponse.fee,
    totalAmount: transferResponse.finalAmount,
    transactionId: transferResponse.id,
  // payeeName: transferResponse.payeeName, //TODO
  // payeePhone: transferResponse.payeePhone
  };
};

export const prepareCreditRequest = (userProfile, transactionId, creditStatus) => ({
  'userProfile': userProfile,
  'transactionId': transactionId,
  'creditStatus': creditStatus
});

export const prepareVerificationRequest = (phone, countryCode) => ({
  'phone': phone,
  'countryCode': countryCode
});

export const prepareChangePassword = (password) => ({
  'password': password
});

export const prepareVerifyDevice = (deviceId, deviceName, otp) => ({
  'code': otp,
  'deviceId': deviceId,
  'deviceName': deviceName
});
