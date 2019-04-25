import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  const allReviews = state.entities.reviews;
  const book = ownProps.book;
  const currentUser = state.entities.users[state.session.id];
  
  const reviews = book.review_ids.map((id) => {
    
    if(allReviews[id].author_id !== currentUser.id){
      
      return allReviews[id];
    }
  });

  const userReview = book.review_ids.map((id) => {

    if (allReviews[id].author_id === currentUser.id) {

      return allReviews[id];
    }
  });

  const bookReviewers = Object.values(state.entities.users).filter((reviewer) => {
    return book.reviewer_ids.includes(reviewer.id);
  });

  return ({
    reviews: reviews,
    userReview: userReview,
    book: book,
    currentUser: currentUser,
    bookReviewers: bookReviewers,
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
