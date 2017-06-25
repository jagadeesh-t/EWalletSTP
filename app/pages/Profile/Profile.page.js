import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import ProfileView from '../../components/Profile/Profile.component';
import {connect} from 'react-redux';
import {updateProfile} from '../../state/actions/index.thunks';
import * as validations from '../../utils/validator.util';
import result from 'lodash/result';
import PropTypes from 'prop-types';

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

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});
const ProfileForm = reduxForm(formConfig)(ProfileView);

class ProfilePage extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  render () {
    const {user} = this.props;
    return (
      <ProfileForm  user={user} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
