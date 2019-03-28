import { connect } from "react-redux";
import Navbar from './navbar';
import login from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return({
    
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);