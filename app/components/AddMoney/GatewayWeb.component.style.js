import theme from '../../styles/theme.styles';
export default {
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    flex: 8,
    textAlign: 'center',
    marginLeft: 50,
    padding: 10,
    paddingTop: 30,
    paddingLeft: 0
  },
  iconContainer: {
    width: 50,
    paddingBottom: 10,
    paddingTop: 30,
    paddingHorizontal: 15,
    alignItems: 'stretch'
  },
  icon: {
    color: theme.snackButton,
    size: 18
  }
};
