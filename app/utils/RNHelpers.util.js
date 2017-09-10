import RNToast from 'react-native-simple-toast';
import {Alert} from 'react-native';
import RNSnackBar from 'react-native-snackbar';
import {theme} from '../styles/theme.styles';
import {wrapMethodInFunction} from './transformer.util';
import {language} from '../config/language';

const SnackBar = {
  show: (title) => {
    RNSnackBar.show({
      title,
      backgroundColor: theme.snackbarBg,
      duration: RNSnackBar.LENGTH_LONG,
      action: {
        title: language.SNACKBAR__CLOSE,
        color: theme.contrast,
        onPress: wrapMethodInFunction(RNSnackBar.dismiss),
      },
    });
  }
};

const Toast = {
  show: (message, disableToast = false) => {
    !disableToast && RNToast.show(message);
  }
};

module.exports = {
  Toast,
  Alert,
  SnackBar
};
