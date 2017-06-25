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
    flex: 1
  },
  phoneText: {
    paddingBottom: 20,
    paddingTop: 10,
    color: theme.textColorHighlight
  },
  formContainer: {
    flex: 2,
    paddingTop: 10
  },
  subTitle: {
    fontSize: theme.fontSizeLarge,
    paddingVertical: 10,
    fontWeight: theme.fontWeightLight,
    color: theme.secondary
  },
  formHeader: {
    flexDirection: 'row',
    paddingTop: 10
  },
  formHeaderText: {
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
    color: theme.textColor,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  scan: {
    padding: 5,
    color: theme.secondary,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
  },
  imageContainer: {
    height: 130,
    width: null,
    padding: 20,
    backgroundColor: theme.transparent,
    justifyContent: 'space-between'
  },
  phoneContainer: {
    paddingBottom: 40,
    paddingTop: 30,
    flexDirection: 'row'
  }
};
