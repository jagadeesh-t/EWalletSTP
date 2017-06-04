import theme from '../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    flexGrow: 1
  }],
  titleContainer: {
    paddingBottom: 10,
    flex: 1
  },
  subtext: {
    fontSize: theme.fontSizeNormal,
    color: theme.textColor
  },
  payGraphic: {
    height: 110,
    paddingBottom: 10
  },
  status: {
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: theme.fontSizeLarge
  },
  image: {
    flex: 1,
    height: null,
    width: null
  },
  card: {
    backgroundColor: theme.contrast,
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 20,
    flex: 8
  },
  subtitle: {
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeMedium,
    paddingVertical: 10
  },
  fieldRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldKey: {
    paddingVertical: 10,
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeMedium
  },
  fieldValue: {
    paddingVertical: 10,
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeMedium
  },
  amount: {
    fontSize: theme.fontSizeLarge,
    paddingVertical: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
};
