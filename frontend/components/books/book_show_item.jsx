import React from 'react';
import { Link } from 'react-router-dom';

class BookShowItem extends React.Component {

  

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  render() {

    if(!this.props.book){
      return null;
    }
    return (
      <div>
        <div>Title: {this.props.book.title}</div>
        <div>Description: {this.props.book.description}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div>Year Published: {this.props.book.year_published}</div>
        <Link to={`/home`}>Home Page</Link>
      </div>
    );
  }
}

export default BookShowItem;