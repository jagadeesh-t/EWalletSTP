import theme from '../../styles/theme.styles';
export default {
  container: {
    flex: 1
  },
  camera: {
    flex: 1,
    justifyContent: 'center'
  },
  finder: {
    alignSelf: 'center'
  },
  barItem: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  barItemText: {
    alignSelf: 'center',
    fontSize: 15,
    padding: 5,
    color: theme.contrast
  },
  viewboxImage: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  bottomBar: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    height: 50
  }
};
