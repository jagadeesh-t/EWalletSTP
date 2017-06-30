import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import VerificationView from '../../components/Onboarding/Verification.component';
import {connect} from 'react-redux';
import {verifyAndRegister} from '../../state/actions/index.thunks';

const formConfig = {
  form: 'Verification',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: (values, dispatch) => {
    const {OTP} = values;
    return dispatch(verifyAndRegister(OTP));
  },
};

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({regisrationDetails: state});

const VerificationForm = reduxForm(formConfig)(VerificationView);

class VerificationPage extends Component {
  render () {
    return (
      <VerificationForm />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationPage);
