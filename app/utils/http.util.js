import {SERVER_URL, endpoints, mockResponses} from '../config/api.config';
import env from '../config/env.config';
import axios from 'axios';

const baseConfig = {
  baseURL: SERVER_URL,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  params: {},
  timeout: 60000, // 60 seconds
  withCredentials: true,
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
  cancelToken: null,
  // onDownloadProgress: () => {}, // Left this as a reference incase we need it
};

// To create a cancel Token
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();
// http.get('/test', {cancelToken: source.token});
// source.cancel('Operation canceled by the user.');

export const get = (endpoint, options = {}) => {
  const config = {
    ...baseConfig,
    ...options,
    method: 'get',
    endpoint,
    url: endpoints[endpoint]
  };
  return axios(config);
};

export const post = (endpoint, data = {}, options = {}) => {
  const config = {
    ...baseConfig,
    ...options,
    method: 'post',
    endpoint,
    url: endpoints[endpoint],
    data
  };
  return axios(config);
};

// Interceptor that sets mock response
axios.interceptors.request.use((config) => {
  if (env.MOCKAPI) {
    console.log('SETTING MOCK for endpoint', config.endpoint);
    config.adapter = mockAdapter;
  }
  return config;
}, Promise.reject);

const mockAdapter = (config) => new Promise((resolve) => {
  const mockData = mockResponses[config.endpoint] || {};
  const response = {
    data: mockData.response,
    status: 200,
    statusText: 'OK - Mocked request',
    headers: {mock: true},
    config: config,
  };
  setTimeout(() => resolve(response), 500);
});


export const noNetworkAdaptor = () => Promise.reject({response: {data: {notConnected: true}}});
