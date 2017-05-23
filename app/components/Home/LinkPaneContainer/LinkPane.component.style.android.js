import theme from '../../../styles/theme.styles';
export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    margin: 2,
    backgroundColor: theme.white
  },
  iconSize: 25,
  icon: {
    color: theme.ternary
  },
  title: {
    fontSize: theme.fontSizeNormal,
    paddingTop: 10,
    color: theme.textColorHighlight,
    fontWeight: theme.fontWeightLight
  }
};
