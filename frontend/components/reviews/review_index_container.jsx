import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const allReviews = Object.values(state.entities.reviews);
  const book = ownProps.book;
  const currentUser = state.entities.users[state.session.id];

  return ({
    reviews: allReviews,
    book: book,
    currentUser: currentUser,
    users: state.entities.users

  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    fetchUsers: () => dispatch(fetchUsers())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
