import { connect } from 'react-redux';
import { newUser, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  console.log(state, "state");
  console.log(ownProps, "ownProps");
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.formType
  };
};

//TODO: Do I need to pass params here?
const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(newUser(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
