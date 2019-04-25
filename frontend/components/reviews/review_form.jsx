import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.review) {
      this.state = this.props.review;
      this.state.reviewChange = false;
      this.formType = 'update';
    } else {
      this.state = {
        body: '',
        author_id: this.props.currentUser.id,
        book_id: this.props.book.id,
        rating: 5,
        reviewChange: false
      };
      this.formType = 'write';
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewAction = this.handleReviewAction.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
  }

  update(field) {

    return e => {

      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = Object.assign({}, this.state);

    if(this.formType === 'write'){
      review.reviewChange = false;

      this.props.createReview(review).then(()=>{
        
        this.formType = "update";
        this.setState(review);
      });
    } else {
      review.reviewChange = false;
      this.props.updateReview(review).then(() =>{
        this.setState(review);
      });
    }
  }

  handleReviewAction() {
    
    this.setState({reviewChange: true});
    
  }

  handleDelete(review){
    
    this.props.deleteReview(review.id).then(()=> {
      this.formType = "write";
      this.setState({
        body: '',
        author_id: this.props.currentUser.id,
        book_id: this.props.book.id,
        rating: 5,
        reviewChange: false
      });
    });
  }


  render() {
    
    if(this.formType === null){
      return null;
    }

    const reviewAction = (this.formType === 'update') ? (
      <>
        <span className="review-action-button-container">
          <button className="review-action-button" value="Update Review" onClick={this.handleReviewAction}>Update Review</button>
        </span>
        <span>
          <button className="review-delete-button" value="Delete Review" onClick={() => this.handleDelete(this.props.review)}>Delete Review</button>
        </span>
      </>
    ) : (
      <div className="review-action-button-container">
          <button className="review-action-button" value="Create Review" onClick={this.handleReviewAction}>Write Review</button>
      </div>
    )

    const renderReviewForm = (this.state.reviewChange === true) ? (
      <>
        
        <div>
          <form onSubmit={this.handleSubmit} className={`${this.formType}-review-box`}>
            <div className={`${this.formType}-form`}>
              <textarea 
                value={this.state.body} 
                onChange={this.update('body')} 
                className={`${this.formType}-review-input`}
                placeholder='Write your review'>
              </textarea>
              <input className={`${this.formType}-submit`} type="submit" value={`submit`} />
            </div>

          </form>
        </div>
      </>
    ) : (
      <div></div>
    )

    return (
      <div className={`${this.formType}-review-container`}>
        <div className="user-review-display-container">
        </div>
        <div>
          {reviewAction}
        </div>
        <div>
          {renderReviewForm}
        </div>
        
      </div>
    );

  }

}

export default withRouter(ReviewForm);