import React from 'react';
import { Link } from 'react-router-dom';

class BookIndexCover extends React.Component {


  render(){
    
    
    return (
      <img className="book-index-cover" src={this.props.book.cover_url} />
    );
  }
}

export default BookIndexCover;