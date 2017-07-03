import theme from '../../styles/theme.styles';

export default {
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FEFEFE',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    textAlign: 'center',
    fontSize: theme.fontSizeMedium
  },
  creditIcon: {
    color: theme.primary
  },
  debitIcon: {
    color: theme.warning
  },
  bothIcon: {
    fontSize: theme.fontSizeSmall
  },
  descriptionContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  description: {
    textAlign: 'center',
    flex: 1,
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightBold
  },
  amountContainer: {
    flex: 3
  },
  amount: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightMedium
  },
  dateContainer: {
    flex: 3
  },
  date: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightMedium
  }
};
