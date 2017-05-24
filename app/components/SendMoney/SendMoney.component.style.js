import theme from '../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    paddingBottom: 0
  }],
  contentContainer: {
    flex: 1
  },
  titleContainer: {
    flex: 1
  },
  mainAreaContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  },
  qrReaderContainer: {
    flex: 1
  },
  formContainer: {
    flex: 2,
    paddingVertical: 10
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeXL,
    paddingBottom: 10,
    color: theme.primary
  },
  subTitle: {
    fontSize: theme.fontSizeNormal,
    paddingBottom: 20,
    color: theme.textColor
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
