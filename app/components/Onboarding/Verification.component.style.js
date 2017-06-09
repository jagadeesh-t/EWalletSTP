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
    paddingLeft: 10,
    paddingBottom: 20
  },
  scan: {
    padding: 5,
    color: theme.secondary,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
  },
  inputStyle: {
    alignSelf: 'center',
    width: 100
  },
  
  qrButton: {
    alignSelf: 'center'
  },
  imageContainer: {
    height: 130,
    width: null,
    padding: 20,
    backgroundColor: theme.transparent,
    justifyContent: 'space-between'
  },
  textcontainer: {
    paddingTop: 20,
    fontStyle: 'italic'
  }
};
