import HomePage from './home_page';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: ()=> dispatch(logout()),
    fetchUsers: ()=>dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);