import theme from '../../../styles/theme.styles';

export default {
  container: {
    height: null,
    width: null,
    backgroundColor: theme.transparent,
    flex: 3
  },
  titleContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    paddingTop: 20,
    fontSize: theme.fontSizeSmall,
    paddingHorizontal: 20,
    color: theme.lightgrey,
  },
  amount: {
    color: theme.textColorInverted,
    paddingTop: 10,
    paddingHorizontal: 20,
    fontSize: theme.fontSizeXXL,
    fontWeight: theme.fontWeightLight,
  },
  currency: {
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold
  }
};
