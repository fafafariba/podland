import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SplashNav from './splash_nav';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashNav);
