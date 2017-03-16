import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
