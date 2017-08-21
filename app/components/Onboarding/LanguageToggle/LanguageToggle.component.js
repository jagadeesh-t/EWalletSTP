import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import noop from 'lodash/noop';
import styles from './LanguageToggle.component.style';
import Touchable from '../../Touchable/Touchable.component';

class LanguageToggle extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func,
    selectedLangauge: PropTypes.string
  }
  onLangToggle = (langId) => () => {
    const {onToggle = noop} = this.props;
    onToggle(langId);
  }
  render () {
    const {selectedLangauge} = this.props;
    let enLangStyle = styles.languageID;
    let enLangTouchableStyle = {};
    let ptLangStyle = styles.languageID;
    let ptLangTouchableStyle = {};
    if (selectedLangauge === 'en') {
      enLangStyle = {...enLangStyle, ...styles.selectedLanguageID};
      enLangTouchableStyle = styles.languageIDTouchableSelected;
    } else {
      ptLangStyle = {...ptLangStyle, ...styles.selectedLanguageID};
      ptLangTouchableStyle = styles.languageIDTouchableSelected;
    }
    return (
      <View style={styles.languageToggle}>
        <Touchable style={enLangTouchableStyle} onPress={this.onLangToggle('en')}><Text style={enLangStyle}>EN</Text></Touchable>
        <Touchable style={ptLangTouchableStyle} onPress={this.onLangToggle('pt')}><Text style={ptLangStyle}>PT</Text></Touchable>
      </View>
    );
  }
}

export default LanguageToggle;
