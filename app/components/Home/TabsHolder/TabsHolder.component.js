import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabsHolder.component.style';
import {View} from 'react-native';
import noop from 'lodash/noop';
import Tab from './Tab.component';

class TabsHolder extends React.Component {
  static propTypes = {
    tabs: PropTypes.array
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.props.tabs.map((eachTab, i) =>
            <Tab key={i} icon={eachTab.icon} onClick={noop} id={eachTab.id} title={eachTab.title} />)
      }
      </View >
    );
  }
}

export default TabsHolder;
