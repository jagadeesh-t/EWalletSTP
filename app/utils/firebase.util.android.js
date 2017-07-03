import RNFirebase from 'react-native-firebase';
import * as api from './api.util';
import * as middleware from './middleware.util';
import {Toast} from '../utils/RNHelpers.util';
import result from 'lodash/result';

const configurationOptions = {
  debug: true,
  promptOnMissingPlayServices: false,
  errorOnMissingPlayServices: false
};

const firebase = RNFirebase.initializeApp(configurationOptions);

firebase.messaging().requestPermissions();

firebase.messaging().onMessage((message) => {
  const title = result(message, 'fcm.title', null);
  const body = result(message, 'fcm.body', null);
  Toast.show(`${title} ${body}`);
});

firebase.analytics().setAnalyticsCollectionEnabled(true);

firebase.messaging().onTokenRefresh((token) => {
  const payload = middleware.prepareUpdateDevicePushToken(token);
  return api.updateDevicePushToken(payload).
  catch((err) => console.log(err));// Not printing the error - just leaving for debug purposes
});

export const updateClientFCMTokenOnServer = () => {
  const fcm = firebase.messaging();
  return fcm.getToken().then((token) => {
    const payload = middleware.prepareUpdateDevicePushToken(token);
    return api.updateDevicePushToken(payload);
  });
};

export default firebase;
