import theme from '../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    flexDirection: 'column'
  }],
  contentContainer: {
    justifyContent: 'space-around',
    flexGrow: 1
  },
  titleContainer: {
    flex: 1
  },
  logoContainer: {
    height: 100,
    paddingBottom: 10
  },
  formContainer: {
    paddingBottom: 20,
    flex: 3,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 0,
    justifyContent: 'flex-end'
  },
  logo: {
    flex: 1,
    height: null,
    width: null
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeLarge,
    color: theme.ternary
  },
  logoSize: 80,
  formHeader: {
    flexDirection: 'row'
  },
  formHeaderText: {
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
    color: theme.textColor,
    paddingLeft: 10
  },
  registerText: {
    textAlign: 'right',
    fontSize: 13,
    color: theme.warning,
    fontWeight: theme.fontWeightMedium
  },
  linkTextContainer: {
    paddingVertical: 20
  }
};
