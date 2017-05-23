import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.component.style';
import {View, Text} from 'react-native';
import {currencyFormatter} from '../../../utils/transformer.util';

class Banner extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.amount}>STD {currencyFormatter(this.props.amount)}</Text>
      </View>
    );
  }
}

export default Banner;
