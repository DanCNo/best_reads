import React from 'react';
import { Link } from 'react-router-dom';

class BookIndexCover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coverUrl: this.props.book.cover_url
    };
  }

  componentDidMount() {
    // this.getBookCover();
  }

  // getBookCover() {
  //   if (this.props.isbn) {
  //     fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbn}&jscmd=data&format=json`).then(
  //       response => response.json()
  //     ).then(data => Object.values(data)[0].cover.small).then(coverUrl => this.setState({ coverUrl }));
  //   }
  // }

  render(){
    return (
      <img className="book-index-cover" src={this.state.coverUrl} />
    );
  }
}

export default BookIndexCover;