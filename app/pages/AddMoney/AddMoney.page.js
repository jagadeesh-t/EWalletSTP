import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddMoneyView from '../../components/AddMoney/AddMoney.component';
import {reduxForm} from 'redux-form';
import {getPaymentPage} from '../../state/actions/index.thunks';
import * as validations from '../../utils/validator.util';

const formConfig = {
  form: 'addmoney',
  destroyOnUnmount: true,
  initialValues: {

  },
  onSubmit: (values, dispatch) => {
    dispatch(getPaymentPage());
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['amount'], errors);
    return errors;
  }
};

const AddMoneyForm = reduxForm(formConfig)(AddMoneyView);


class AddMoneyPage extends Component {
  render () {
    return <AddMoneyForm />;
  }
}

export default connect(null, null)(AddMoneyPage);
