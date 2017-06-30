import RNToast from 'react-native-simple-toast';
import {Alert} from 'react-native';
import RNSnackBar from 'react-native-snackbar-dialog';
import {theme} from '../styles/theme.styles';
import {wrapMethodInFunction} from './transformer.util';
import {language} from '../config/language';

const SnackBar = {
  show (title) {
    RNSnackBar.show(title, {
      backgroundColor: theme.snackbarBg,
      textColor: theme.contrast,
      buttonColor: theme.snackButtonBg,
      onConfirm: wrapMethodInFunction(RNSnackBar.dismiss),
      confirmText: language.SNACKBAR__CLOSE,
      duration: 4000,
    });
  }
};

const Toast = (message, disableToast = false) => {
  if (disableToast) {
    return;
  }
  RNToast.show(message);
};

module.exports = {
  Toast,
  Alert,
  SnackBar
};
