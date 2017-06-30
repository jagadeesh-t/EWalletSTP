import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import VersionNumber from 'react-native-version-number';

const deviceInfo = {
  deviceId: DeviceInfo.getUniqueID(),
  name: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel()
};

module.exports = {
  deviceInfo,
  currentPlatform: Platform.OS,
  currentAppVersion: VersionNumber.appVersion
};
