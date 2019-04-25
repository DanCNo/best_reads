import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  componentDidMount() {

    this.props.fetchReviews();
    this.props.fetchUsers();

  }

  render() {
    const book = this.props.book;
    const currentUser = this.props.currentUser;
    const users = this.props.users;


    const bookReviewers = Object.values(users).filter((reviewer) => {
      return book.reviewer_ids.includes(reviewer.id);
    });

    const bookReviews = this.props.reviews.filter((review) => {
      if(book && book.review_ids.length > 0){
        return (book.review_ids.includes(review.id) && review.author_id !== currentUser.id);
      }
    });

    const userReview = this.props.reviews.filter((review) => {
      if(book && book.review_ids.length > 0){
        return (book.review_ids.includes(review.id) && review.author_id == currentUser.id);
      }
    });

    let userReviewDisplay;
    if(userReview[0]){
      userReviewDisplay = userReview.map((review) => {

        return <ReviewIndexItem key={review.id + 1000} book={book} review={review} currentUser={currentUser} bookReviewers={bookReviewers}/>})
    }
    
    let displayReviews;
    if(bookReviews){
      displayReviews = bookReviews.map((review, idx) => {
  
        return <ReviewIndexItem key={idx} book={book} review={review} currentUser={currentUser} bookReviewers={bookReviewers}/>
      });
    }

    if(Object.values(users).length < 2){
      return null;
    }

    return (
      <>
        <div className="user-review-container">
          {userReviewDisplay}
        </div>      
        <div className="review-index-container">
          {displayReviews}
        </div>
      </>
    );
  }
}

export default ReviewIndex;