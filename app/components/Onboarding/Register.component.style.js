import theme from '../../styles/theme.styles';
export default {
  pageContainer: theme.pageContainer,
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 10
  },
  headerIcon: {
    color: theme.textColor
  },
  formContainer: {
    flex: 3
  },
  formHeader: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  formHeaderText: {
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
    color: theme.textColor,
    paddingLeft: 10
  }
};
