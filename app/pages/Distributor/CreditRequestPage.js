import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CreditRequestView from '../../components/Distributor/CreditRequest.component';
import {connect} from 'react-redux';
import {createCreditRequest} from '../../state/actions/index.thunks';


const formConfig = {
  form: 'creditRequest',
  destroyOnUnmount: true,
  initialValues: {},

  onSubmit: (values, dispatch) => {
    const {transactionId} = values;
    return dispatch(createCreditRequest(transactionId));
  },
};

const mapDispatchToProps = () => ({

});

const mapStateToProps = () => ({});

const CreditRequestForm = reduxForm(formConfig)(CreditRequestView);

class CreditRequestPage extends Component {

  render () {
    return (
      <CreditRequestForm />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditRequestPage);
