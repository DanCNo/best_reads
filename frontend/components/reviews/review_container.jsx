import { connect } from 'react-redux';
import { 
  createReview,
  updateReview,
  deleteReview,
  fetchReview 
} from '../../actions/review_actions';
import { fetchUsers } from '../../actions/session_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const reviews = state.entities.reviews;
    const book = ownProps.book;
    let review;
    let reviewId;
    
    if(currentUser.reviewed_book_ids.includes(book.id)){
      reviewId = currentUser.review_ids.filter((id) => {
        return book.review_ids.includes(id);
      });
      reviewId = reviewId[0];
      review = reviews[reviewId];
    }
  debugger
  return({
    review: review,
    book: book,
    currentUser: currentUser,

  });
};

const mapDispatchToProps = dispatch => {
  return{
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
