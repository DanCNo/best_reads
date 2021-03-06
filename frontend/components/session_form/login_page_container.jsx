import { connect } from 'react-redux';
import { login, clearErrors, fetchUsers } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login-page',
    submitType: 'login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);