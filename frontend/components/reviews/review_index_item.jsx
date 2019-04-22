import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ book, review }) => {
  if (!review) {
    return null;
  }

  return (
    <div>
        <div>Rating
          <span>{review.rating}</span>
        </div>
        <div>Review Body
          <span>{review.body}</span>
        </div>
    </div>
  );
};

export default ReviewIndexItem;