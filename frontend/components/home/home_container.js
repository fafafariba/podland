import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
