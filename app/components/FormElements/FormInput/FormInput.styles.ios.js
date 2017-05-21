import theme from '../../../styles/theme.styles';

export default {
  input: {
    plain: {
      fontSize: theme.fontSizeNormal,
      color: theme.text,
      padding: 7,
      height: 47,
      fontWeight: theme.fontWeightLight
    },
    primary: {
      fontSize: theme.fontSizeMedium,
      color: theme.text,
      padding: 10,
      height: 50,
      fontWeight: theme.fontWeightLight
    }
  },
  container: {
    plain: {
      borderColor: theme.grey,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: theme.background
    },
    primary: {
      marginTop: 10,
      backgroundColor: theme.inputBackground
    }

  }
};
