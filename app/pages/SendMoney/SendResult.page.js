import React, {Component} from 'react';
import SendResultView from '../../components/SendMoney/SendResult.component';
import {connect} from 'react-redux';
import moment from 'moment';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import result from 'lodash/result';

const mapDispatchToProps = (dispatch) => ({
  onDone: () => {
    dispatch(NavigationActions.back());
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Home'})
      ]
    }));
  }
});

const mapStateToProps = (state) => ({
  transactionResult: result(state, 'transactionResult', {})
});

class SendResultScreen extends Component {
  static propTypes = {
    onDone: PropTypes.func,
    transactionResult: PropTypes.object
  }
  currentDate = moment();
  render () {
    const {transactionResult} = this.props;
    return (
      <SendResultView transactionResult={transactionResult} onDone={this.props.onDone}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendResultScreen);
