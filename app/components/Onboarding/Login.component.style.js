import theme from '../../styles/theme.styles';
export default {
  pageContainer: theme.pageContainer,
  contentContainer: {
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeXL,
    paddingBottom: 10,
    color: theme.primary
  },
  subTitle: {
    fontSize: theme.fontSizeNormal,
    paddingBottom: 30,
    color: theme.textColor
  },
  logoSize: 80,
  logo: {
    alignSelf: 'center'
  },
  formContainer: {
    paddingBottom: 20
  },
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
    color: theme.ternary,
    fontWeight: theme.fontWeightBold
  },
  linkTextContainer: {
    paddingVertical: 20
  },
  buttonContainer: {
    paddingVertical: 10
  }
};
