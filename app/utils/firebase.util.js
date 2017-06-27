import RNFirebase from 'react-native-firebase';

const configurationOptions = {
  debug: true,
  promptOnMissingPlayServices: true
};

const firebase = RNFirebase.initializeApp(configurationOptions);
firebase.messaging().getToken().
  then((token) => {
    console.log('Device FCM Token: ', token);
  });
firebase.messaging().onMessage((message) => {
  console.log('MESSAGE', message);
});
firebase.messaging().getInitialNotification().
  then((notification) => {
    console.log('Notification which opened the app: ', notification);
  });
firebase.messaging().getBadgeNumber().
    then((badgeNumber) => {
      console.log('Current badge number: ', badgeNumber);
    });
firebase.analytics().setAnalyticsCollectionEnabled(true); 
export default firebase;
