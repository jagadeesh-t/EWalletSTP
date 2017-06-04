import React, {Component} from 'react';
import ReceiveView from '../../components/Receive/Receive.component';
import {connect} from 'react-redux';
import result from 'lodash/result';
import PropTypes from 'prop-types';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});

class ReceiveScreen extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  render () {
    const {user} = this.props;
    return (
      <ReceiveView user={user} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveScreen);
