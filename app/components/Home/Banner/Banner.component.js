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
    phone: PropTypes.string,
    style: PropTypes.object,
    onLogoutClick: PropTypes.func
  }

  render () {
    const {name, phone, amount, style, onLogoutClick} = this.props;
    return (
      <Image style={styles.imageContainer} resizeMode='stretch' source={bannerBg}>
        <View style={[style]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{language.HOME__TITLE} <Text style={styles.name}>{name}</Text></Text>
            <Touchable onPress={onLogoutClick}><RNIcon style={styles.logout} size={styles.logoutSize} name='power-off' /></Touchable>
          </View>
          <View>
            <Text style={styles.balance}>{language.HOME__BALANCE}</Text>
            <Text style={styles.amount}>STD {currencyFormatter(amount)}</Text>
          </View>
          <View>
            <Text style={styles.balance}>{language.HOME__PHONE}</Text>
            <Text style={styles.phone}>{phone}</Text>
          </View>
        </View>
      </Image>
    );
  }
}

export default Banner;
