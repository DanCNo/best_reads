import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.review) {
      this.state = this.props.review;
      this.formType = 'update';
    } else {
      this.state = {
        body: '',
        author_id: this.props.currentUser.id,
        book_id: this.props.book.id,
        rating: 0
      };
      this.formType = 'create';
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

    if(this.formType === 'create'){
      this.props.createReview(review);
    } else {
      this.props.updateReview(review);
    }
  }


  render() {

    if(this.formType === null){
      return null;
    }

    return (
      <div className={`${this.formType}-review-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.formType}-review-box`}>
          <div className={`${this.formType}-form`}>
            <div>
              <input type="body"
                value={this.state.body}
                onChange={this.update('body')}
                className={`${this.formType}-review-input`}
                placeholder='Write your review'
              />
            </div>
            {/* <div className="password-text">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                required="required"
                className={`${this.props.formType}-input`}
                placeholder='Password'
              />
            </div> */}
            <input className={`${this.formType}-submit`} type="submit" value={`${this.formType}`} />
          </div>

        </form>

      </div>
    );

  }

}

export default withRouter(ReviewForm);