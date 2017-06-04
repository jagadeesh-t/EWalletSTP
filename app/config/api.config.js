import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/signup',
  TRANSACT: '/transact'
};

export const mockResponses = env.fixtures || {};
