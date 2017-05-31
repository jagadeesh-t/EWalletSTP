import theme from '../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    flexGrow: 1,
    paddingHorizontal: 0
  }],
  titleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  title: {
    fontWeight: theme.fontWeightLight,
    fontSize: theme.fontSizeXL,
    paddingBottom: 10,
    color: theme.primary
  },
  subtext: {
    fontSize: theme.fontSizeNormal,
    paddingBottom: 10,
    color: theme.textColor
  },
  filterBar: {
    backgroundColor: theme.ternary,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterTab: {
    flex: 1
  },
  filterText: {
    textAlign: 'center',
    padding: 10,
    color: theme.contrast
  }
};
