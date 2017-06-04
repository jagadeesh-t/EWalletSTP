import * as Http from './http.util';

export const login = (loginPayload) =>
Http.post('LOGIN', loginPayload,
  {additional: ['FTXID']});

export const register = (registerPayload) =>
  Http.post('REGISTER', registerPayload,
    {additional: ['FTXID']});

export const logout = () => Http.get('LOGOUT');
