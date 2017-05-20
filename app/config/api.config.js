import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  LOGIN: '/login'
};

export const mockResponses = env.fixtures || {};
