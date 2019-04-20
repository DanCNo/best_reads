import React from 'react';
import { Link } from 'react-router-dom';

class BookIndexCover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coverUrl: this.props.book.cover_url
    };
  }

  render(){
    return (
      <img className="book-index-cover" src={this.state.coverUrl} />
    );
  }
}

export default BookIndexCover;