import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  componentDidMount() {

    // this.props.fetchReviews();
    this.props.fetchUsers();

  }

  render() {
    
    const reviews = this.props.reviews;
    const book = this.props.book;
    const currentUser = this.props.currentUser;
    const userReview = this.props.userReview;
    const bookReviewers = this.props.bookReviewers;
    const users = this.props.users;
    

    const displayReviews = reviews.map((review, idx) => {

      return <ReviewIndexItem key={idx} book={book} review={review} currentUser={currentUser} bookReviewers={bookReviewers}/>
    });

    if(reviews.length > 0 && this.props.users)

    return (
      <>      
        <div className="review-index-container">
          {displayReviews}
        </div>
      </>
    );
  }
}

export default ReviewIndex;