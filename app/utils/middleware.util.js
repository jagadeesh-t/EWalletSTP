export const login = (phone, password) => ({
  'phone': phone,
  'password': password
});

export const register = (phone, password, name, email, countryCode) => ({
  'name': name,
  'phone': phone,
  'password': password,
  'email': email,
  'country_code': countryCode
});
