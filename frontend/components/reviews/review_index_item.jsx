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
    <div>
        <div>Rating
          <span>{reviewer.name}</span>
        </div>
        <div className="review-index-item-container">
          <span>{review.body}</span>
        </div>
    </div>
  );
};

export default ReviewIndexItem;