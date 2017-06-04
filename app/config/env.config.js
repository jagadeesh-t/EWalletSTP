const defaults = {
  ENV: 'dev',
  MOCKAPI: false,
  URL: 'http://localhost:1337',
  GA_TRACKER_ID: 'UA-XXXXX',
  GA_TRACKER_INTERVAL: 2,
  fixtures: require('./fixtures.config')
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};

module.exports = {
  setEnv,
  get ENV () {
    return defaults.ENV;
  },
  get MOCKAPI () {
    return defaults.MOCKAPI;
  },
  URL: defaults.URL,
  GA_TRACKER_ID: defaults.GA_TRACKER_ID,
  GA_TRACKER_INTERVAL: defaults.GA_TRACKER_INTERVAL,
  fixtures: defaults.fixtures
};
