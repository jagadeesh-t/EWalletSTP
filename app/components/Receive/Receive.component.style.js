import theme from '../../styles/theme.styles';
export default {
  pageContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: theme.pageContainer.backgroundColor
  },
  qrContainer: {
    backgroundColor: theme.white,
    padding: 20,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: theme.lightgrey
  },
  qrBox: {
    alignSelf: 'center'
  },
  demoContainer: {
    flex: 1,
  },
  demoText: {
    alignSelf: 'center',
    padding: 20,
    fontSize: theme.fontSizeLarge,
    fontWeight: theme.fontWeightMedium,
    color: theme.ternary,
    textAlign: 'center'
  },
  demo: {
    flex: 1,
    width: null,
    height: null
  }
};
