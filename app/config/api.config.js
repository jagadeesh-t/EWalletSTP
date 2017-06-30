import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  TRANSACT: '/transact',
  TRANSACTIONHISTORY: '/transactions',
  USER: '/user',
  CONFIRMTRANSFER: '/transactionInfo',
  CREDITREQUEST: '/createCreditRequest',
  SENDVERIFICATIONMESSAGE: '/send-verification-message',
  VERIFYPHONE: '/verify-device',
  CHANGEPASSWORD: '/passwordReset',
  UPDATEPROFILE: '/profile'
};

export const mockResponses = env.fixtures || {};
