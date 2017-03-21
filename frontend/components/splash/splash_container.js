import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { clearErrors, login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Splash));
