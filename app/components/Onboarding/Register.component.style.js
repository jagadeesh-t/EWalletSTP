import theme from '../../styles/theme.styles';
export default {
  pageContainer: theme.pageContainer,
  contentContainer: {
    paddingBottom: 40
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeXL,
    color: theme.ternary,
    paddingBottom: 20
  },
  headerIcon: {
    color: theme.textColor
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
  }
};
