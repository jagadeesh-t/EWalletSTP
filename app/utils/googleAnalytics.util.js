import {GoogleAnalyticsTracker, GoogleAnalyticsSettings} from 'react-native-google-analytics-bridge';
import env from '../config/env.config';

GoogleAnalyticsSettings.setDispatchInterval(env.GA_TRACKER_INTERVAL);
const tracker = new GoogleAnalyticsTracker(env.GA_TRACKER_ID);
export default tracker;
