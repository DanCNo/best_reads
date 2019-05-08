import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.review) {
      this.state = {
        id: this.props.review.id,
        body: this.props.review.body,
        author_id: this.props.review.author_id,
        book_id: this.props.review.book_id,
        rating: this.props.review.rating,
        reviewChange: false,
        formType: 'update'
      };
    } else {
      this.state = {
        id: null,
        body: '',
        author_id: this.props.currentUser.id,
        book_id: this.props.book.id,
        rating: 5,
        reviewChange: false,
        formType: 'write'
      };
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

    if(this.state.formType === 'write'){
      this.setState({ reviewChange: false });

      this.props.createReview(review).then((response)=>{
        this.setState(response.review);
        this.setState({formType: "update"});
      });
    } else {
      this.setState({ reviewChange: false });
      this.props.updateReview(review);
      this.setState({ formType: "update" });
    }
  }

  handleReviewAction() {
    
    this.setState({reviewChange: true});
    
  }

  handleDelete(review){
    
    this.props.deleteReview(review.id).then(()=> {
    
      this.setState({
        id: null,
        body: '',
        author_id: this.props.currentUser.id,
        book_id: this.props.book.id,
        rating: 5,
        reviewChange: false,
        formType: 'write'
      });
    });
  }


  render() {
    if(this.state.formType === null){
      return null;
    }

    const reviewAction = (this.state.formType === 'update') ? (
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
                className={`${this.state.formType}-review-input`}
                placeholder='Write your review'>
              </textarea>
              <input className={`${this.state.formType}-submit`} type="submit" value={`submit`} />
            </div>

          </form>
        </div>
      </>
    ) : (
      <div></div>
    )

    return (
      <div className={`${this.state.formType}-review-container`}>
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