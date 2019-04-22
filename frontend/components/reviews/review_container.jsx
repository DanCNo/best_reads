import { connect } from 'react-redux';
import { 
  createReview,
  updateReview,
  deleteReview,
  fetchReview 
} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  
  return({
    // review: state.entities.reviews[ownProps.match.params.reviewId],
    book: ownProps.book,
    currentUser: state.entities.users[state.session.id],

  });
};

const mapDispatchToProps = dispatch => {
  return{
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
