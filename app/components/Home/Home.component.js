import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class HomeView extends React.Component {
  static propTypes = {

  }

  render () {
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' style={styles.pageContainer} extraHeight={120} />
    );
  }
}

export default HomeView;
