import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import profileView from '../../components/Profile/Profile.component';
import {connect} from 'react-redux';
import {updateProfile} from '../../state/actions/index.thunks';
import * as validations from '../../utils/validator.util';
import result from 'lodash/result';


const formConfig = {
  form: 'Profile',
  destroyOnUnmount: true,
  initialValues: {},
  
  onSubmit: (values, dispatch) => dispatch(updateProfile(values)),

  validate: (values) => {
    const errors = {};
    validations.validateUpdate(values, ['name', 'email'], errors);
    values.email && validations.validateEmail(values, ['email'], errors);
    return errors;
  }

};

const mapDispatchToProps = () => ({
 
});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});
const SettingsForm = reduxForm(formConfig)(profileView);

class SettingsPage extends Component {

  static propTypes = {
    user: PropTypes.object,
  }
 
  render () {
    const {user} = this.props;
    return (
      <SettingsForm  user={user} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
