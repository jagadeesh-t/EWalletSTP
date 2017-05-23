import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkPaneContainer.component.style';
import {View} from 'react-native';
import LinkPane from './LinkPane.component';

class LinkPaneContainer extends React.Component {
  static propTypes = {
    links: PropTypes.array,
    onClick: PropTypes.func
  }
  render () {
    return (
      <View style={styles.container}>
        {this.props.links.map((eachGroup, j) =>
          <View key={j} style={styles.group}>
            {
              eachGroup.map(
                (eachLinPane, i) => <LinkPane icon={eachLinPane.icon} onClick={this.props.onClick} key={i} id={eachLinPane.id} title={eachLinPane.title} />
              )
            }
          </View>)}

      </View >
    );
  }
}

export default LinkPaneContainer;
