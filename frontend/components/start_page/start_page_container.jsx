import StartPage from './start_page';

const mapStateToProps = ({ session, errors, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
