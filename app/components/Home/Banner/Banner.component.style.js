import theme from '../../../styles/theme.styles';

export default {
  container: {
    flex: 2,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary
  },
  title: {
    alignSelf: 'center',
    color: theme.secondary,
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold,
    paddingBottom: 10
  },
  amount: {
    alignSelf: 'center',
    color: theme.white,
    fontSize: theme.fontSizeXXL,
    fontWeight: theme.fontWeightUltraLight
  },
  currency: {
    fontSize: theme.fontSizeNormal,
    fontWeight: theme.fontWeightBold
  }
};
