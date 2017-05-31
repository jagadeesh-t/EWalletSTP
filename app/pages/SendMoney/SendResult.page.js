import React, {Component} from 'react';
import SendResultView from '../../components/SendMoney/SendResult.component';
import {connect} from 'react-redux';
import moment from 'moment';
import {NavigationActions} from 'react-navigation';

const mapDispatchToProps = (dispatch) => ({
  onConfirm: () => {
    dispatch(NavigationActions.back());
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
      ]
    }));
  }
});

const mapStateToProps = () => ({});

class SendResultScreen extends Component {
  static propTypes = {

  }
  currentDate = moment();
  render () {
    return (
      <SendResultView details={[]} txid={'test'} onDone={this.props.onConfirm}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendResultScreen);
