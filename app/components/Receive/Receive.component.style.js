import theme from '../../styles/theme.styles';
export default {
  pageContainer: {
    flex: 1,
    backgroundColor: theme.pageContainer.backgroundColor
  },
  qrContainer: {
    flex: 2.5,
    backgroundColor: theme.secondary
  },
  infoContainer: {
    backgroundColor: theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  demoContainer: {
    flex: 3
  },
  qrWrapper: {
    flex: 1,
    paddingVertical: 20,
    paddingBottom: 0
  },
  qrImage: {
    flexGrow: 1,
    width: null,
    height: null,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 5
  },
  demoText: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: theme.fontSizeMedium,
    fontWeight: theme.fontWeightNormal,
    color: theme.ternary,
    textAlign: 'center'
  },
  demo: {
    flex: 1,
    width: null,
    height: null
  },
  infoGroup: {
    flexDirection: 'row',
    paddingTop: 2
  },
  infoKey: {
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold,
    color: theme.white
  },
  infoValue: {
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold,
    paddingHorizontal: 5,
    color: theme.textColor
  }
};
