import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabsHolder.component.style';
import {View} from 'react-native';
import Tab from './Tab.component';

class TabsHolder extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    onTabClick: PropTypes.func
  }

  onClick = (eachTab) => () => {
    this.props.onTabClick(eachTab);
  }
  render () {
    return (
      <View style={styles.container}>
        {
          this.props.tabs.map((eachTab, i) =>
            <Tab key={i} icon={eachTab.icon} onClick={this.onClick(eachTab)} id={eachTab.id} title={eachTab.title} />)
      }
      </View >
    );
  }
}

export default TabsHolder;
