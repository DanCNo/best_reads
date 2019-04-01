import React from 'react';
import { Link } from 'react-router-dom';
const fetch = require('node-fetch');

class BookShowItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      coverUrl: ""
    };
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId).then(() => this.getBookCover());
  }

  getBookCover() {
    if (this.props.book) {
      fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.book.isbn_13}&jscmd=data&format=json`).then(
        response => response.json()
      ).then(data => Object.values(data)[0].cover.medium).then(coverUrl => this.setState({ coverUrl }));
    }
  }

  render() {
    if(!this.props.book){
      return null;
    }
    return (
      <div>
        <div>
          <img src={this.state.coverUrl} alt=""/>
        </div>
        <div>Title: {this.props.book.title}</div>
        <div>Description: {this.props.book.description}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div>Year Published: {this.props.book.year_published}</div>
        <div>ISBN 13: {this.props.book.isbn_13}</div>
        <Link to={`/home`}>Home Page</Link>
      </div>
    );
  }
}

export default BookShowItem;