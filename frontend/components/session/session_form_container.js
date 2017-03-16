import { connect } from 'react-redux';
import { newUser, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType
  };
};

const mapDispatchToProps = dispatch => ({
  newUser: (user) => dispatch(newUser(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SessionForm));
