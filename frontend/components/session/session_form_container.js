import { connect } from 'react-redux';
import { newUser, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType
  };
};

//TODO: Do I need to pass params here?
const mapDispatchToProps = dispatch => ({
  newUser: (user) => dispatch(newUser(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
