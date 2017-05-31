import theme from '../../styles/theme.styles';

export default {
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FEFEFE',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
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
  descriptionContainer: {
    flex: 6
  },
  description: {
    textAlign: 'center',
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightNormal
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
