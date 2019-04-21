import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW,
} from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_REVIEWS:
      return action.reviews;

    case RECEIVE_REVIEW:
      return merge( {}, state, {[action.review.id]: action.review});

    case REMOVE_REVIEW:

      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default reviewsReducer;