import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.component.style';
import {Text} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import Touchable from '../../Touchable/Touchable.component';

class Tab extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
  }

  render () {
    return (
      <Touchable style={styles.container}>
        <RNIcon name={this.props.icon} style={styles.icon} size={styles.iconSize}/>
        <Text style={styles.title}>{this.props.title}</Text>
      </Touchable>
    );
  }
}

export default Tab;
