import theme from '../../../styles/theme.styles';

export default {
  imageContainer: {
    height: null,
    width: null,
    padding: 20,
    backgroundColor: theme.transparent,
    justifyContent: 'space-between'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  logout: {
    alignSelf: 'center',
    color: theme.lightgrey
  },
  logoutSize: 25,
  title: {
    color: theme.textColorInverted,
    fontSize: theme.fontSizeXL,
    fontWeight: theme.fontWeightLight,
    alignSelf: 'flex-start'
  },
  name: {
    color: theme.secondaryLight
  },
  balance: {
    fontSize: theme.fontSizeSmall,
    color: theme.lightgrey,
    paddingBottom: 5
  },
  amount: {
    color: theme.textColorInverted,
    fontSize: theme.fontSizeXXL,
    fontWeight: theme.fontWeightLight,
    paddingBottom: 20
  },
  phone: {
    color: theme.textColorInverted,
    fontSize: theme.fontSizeMedium,
    fontWeight: theme.fontWeightBold,
  },
  currency: {
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold
  }
};
