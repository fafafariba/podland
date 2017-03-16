import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainNav from './main_nav';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainNav));
