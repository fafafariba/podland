import { connect } from 'react-redux';
import { clearErrors, login } from '../../actions/session_actions';
import SplashNav from './splash_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  login: (user)=> dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashNav);
