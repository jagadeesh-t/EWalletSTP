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
    console.log('logging transactionId here ');
    console.log(values);
    const creditStatus = 'PENDING';
    return dispatch(createCreditRequest(transactionId, creditStatus));
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
