import HomePage from './home_page';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: ()=> dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);