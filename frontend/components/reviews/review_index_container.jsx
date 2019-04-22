import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  const allReviews = state.entities.reviews;
  const book = ownProps.book;
  const currentUser = state.entities.users[state.session.id];
  
  const reviews = book.review_ids.map((id) => {
    return allReviews[id];
  });

  return ({
    reviews: reviews,
    book: book,
    currentUser: currentUser,

  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
