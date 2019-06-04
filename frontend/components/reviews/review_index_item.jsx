import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ book, review, bookReviewers }) => {
  if (!review) {
    return null;
  }

  const reviewer = bookReviewers.find((reviewer) => {
    return review.author_id === reviewer.id;
  });


  return (
    <div className="review-index-item-container">
        <div className="reviewer-username-container">
          <span>{`${reviewer.username}\'s Review`}</span>
        </div>
        <div className="rating-container">
          Rating: <span>{review.rating}</span>
        </div>
        <div>
          <span>{review.body}</span>
        </div>
    </div>
  );
};

export default ReviewIndexItem;