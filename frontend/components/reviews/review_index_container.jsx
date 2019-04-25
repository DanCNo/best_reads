import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const allReviews = Object.values(state.entities.reviews);
  const book = ownProps.book;
  const currentUser = state.entities.users[state.session.id];
  
  // let reviews;
  // let userReview;

  // if(book.review_ids.length > 0){
  //   reviews = book.review_ids.map((id) => {
  //     if(allReviews[id].author_id !== currentUser.id){
        
  //       return allReviews[id];
  //     }
  //   });
  
  //   userReview = book.review_ids.map((id) => {
  //     if (allReviews[id].author_id === currentUser.id) {
  
  //       return allReviews[id];
  //     }
  //   });

  // }

  // const bookReviewers = Object.values(state.entities.users).filter((reviewer) => {
  //   return book.reviewer_ids.includes(reviewer.id);
  // });

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
