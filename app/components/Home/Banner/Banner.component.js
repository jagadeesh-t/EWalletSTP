import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.component.style';
import {Text, Image, View} from 'react-native';
import {currencyFormatter} from '../../../utils/transformer.util';
import bannerBg from '../../../assets/images/banner800x600.png';
import {language} from '../../../config/language';
import RNIcon from '../../../assets/fonts/RNIcon';
import Touchable from '../../Touchable/Touchable.component';

class Banner extends React.Component {
  static propTypes = {
    amount: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    const {name} = this.props;
    return (
      <Image style={[styles.container, this.props.style]} resizeMode='stretch' source={bannerBg}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{language.HOME__TITLE} <Text style={styles.name}>{name}</Text></Text>
          <Touchable><RNIcon style={styles.logout} size={styles.logoutSize} name='power-off' /></Touchable>
        </View>
        <Text style={styles.balance}>{language.HOME__BALANCE}</Text>
        <Text style={styles.amount}>STD {currencyFormatter(this.props.amount)}</Text>
      </Image>
    );
  }
}

export default Banner;
