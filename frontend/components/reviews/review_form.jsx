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
        rating: 0,
        reviewChange: false
      };
      this.formType = 'write';
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewAction = this.handleReviewAction.bind(this);
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
      this.props.createReview(review).then(this.setState({reviewChange: false}));
    } else {
      this.props.updateReview(review).then(this.setState({ reviewChange: false }));
    }
  }

  handleReviewAction() {
    
    this.setState({reviewChange: true});
    
  }


  render() {

    if(this.formType === null){
      return null;
    }

    const reviewAction = (this.formType === 'update') ? (
      <>
        <div className="review-action-button-container">
          <button className="review-action-button" value="Update Review" onClick={this.handleReviewAction}>Update Review</button>
        </div>
      </>
    ) : (
      <div className="review-action-button-container">
          <button className="review-action-button" value="Write Review" onClick={this.handleReviewAction}>Write Review</button>
      </div>
    )

    const renderReviewForm = (this.state.reviewChange === true) ? (
      <>
        <div>
          <form onSubmit={this.handleSubmit} className={`${this.formType}-review-box`}>
            <div className={`${this.formType}-form`}>
              {/* <div>
                <input type="body"
                  value={this.state.body}
                  onChange={this.update('body')}
                  className={`${this.formType}-review-input`}
                  placeholder='Write your review'
                />
              </div> */}
              <textarea 
                value={this.state.body} 
                onChange={this.update('body')} 
                className={`${this.formType}-review-input`}
                placeholder='Write your review'>
              </textarea>
              <input className={`${this.formType}-submit`} type="submit" value={`${this.formType}`} />
            </div>

          </form>
        </div>
      </>
    ) : (
      <div></div>
    )

    return (
      <div className={`${this.formType}-review-container`}>

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