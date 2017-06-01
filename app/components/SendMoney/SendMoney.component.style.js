import theme from '../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer],
  contentContainer: {
    flexGrow: 1
  },
  titleContainer: {
    flex: 1
  },
  mainAreaContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: 20
  },
  qrReaderContainer: {
    flex: 1
  },
  formContainer: {
    flex: 2,
    paddingTop: 10
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeXL,
    paddingBottom: 10,
    color: theme.ternary
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
  },
  scan: {
    padding: 5,
    color: theme.secondary,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
  },
  scanQRIcon: {
    textAlign: 'center',
    fontSize: 100,
    padding: 10,
    textShadowOffset: {width: 1, height: 1},
    color: theme.textColor,
    transform: [{rotate: '10deg'}]
  },
  qrButton: {
    alignSelf: 'center'
  }
};
