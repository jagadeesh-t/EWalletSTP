import * as Http from './http.util';

export const login = (loginPayload) =>
Http.post('LOGIN', loginPayload,
  {additional: ['FTXID']});
