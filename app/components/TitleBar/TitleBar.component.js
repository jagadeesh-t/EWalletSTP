import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './TitleBar.component.style';
import {connect} from 'react-redux';
import noop from 'lodash/noop';
import {language} from '../../config/language/index';

class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    currentLang: PropTypes.string
  }
  render () {
    const {title, currentLang} = this.props;
    noop(currentLang); // just calling to avoid eslint error on currentLang. Its present to re-render on lang change
    return (
      <View>
        <Text style={styles.title}>{language[title]}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({currentLang: state.currentLanguage.langCode});
const ConnectedTitleBar = connect(mapStateToProps, null)(TitleBar);

export default ConnectedTitleBar;
export const getTitleBar = (titleKey) => <ConnectedTitleBar title={titleKey}/>;
