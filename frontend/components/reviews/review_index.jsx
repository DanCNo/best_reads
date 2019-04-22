import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  componentDidMount() {

    // this.props.fetchReviews();

  }

  render() {
    
    const reviews = this.props.reviews;
    const book = this.props.book;
    const currentUser = this.props.currentUser;

    const displayReviews = reviews.map((review, idx) => {

      return <ReviewIndexItem key={idx} book={book} review={review} currentUser={currentUser} />
    });

    return (
      <>      
        <div>
          {displayReviews}
        </div>
      </>
    );
  }
}

export default ReviewIndex;