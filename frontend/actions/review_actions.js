import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = (review) => {
  return({
    type: RECEIVE_REVIEW,
    review,
  });
};

const receiveReviews = (reviews) => {
  return({
    type: RECEIVE_REVIEWS,
    reviews,
  });
};

const removeReview = (review) => {
  return({
    type: REMOVE_REVIEW,
    review, 
  });
};

export const fetchReviews = () => dispatch => (
  ApiUtil.fetchReviews().then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (id) => dispatch => (
  ApiUtil.fetchReview(id).then(review => dispatch(receiveReview(review)))
);

export const createReview = (review) => dispatch => (
  ApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
);

export const updateReview = (review) => dispatch => (
  ApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (id) => dispatch => (
  ApiUtil.deleteReview(id).then(review => dispatch(removeReview(review)))
);