import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ book, review }) => {
  if (!review) {
    return null;
  }

  return (
    <div className="review-index-item-container">
      <div>
        {review.author_id}
      </div>
      <span>{review.body}</span>
    </div>
  );
};

export default ReviewIndexItem;