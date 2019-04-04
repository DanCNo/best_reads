// books from show container is passed to books index
import React from 'react';
import BookIndexContainer from '../books/books_index_container';
class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBookshelf(this.props.match.params.bookshelfId);
  }

  render() {
    
    

    if (!this.props.bookshelf) {
      return null;
    }
    return (
      <div>
        <div>
          {this.props.bookshelf.title}{this.props.bookshelf.id}{this.props.bookshelf.book_ids[0]}
        </div>
        <div>
          <BookIndexContainer bookshelf_books={this.props.books}/>
        </div>
      </div>
    );
  }
}

export default BookshelfShow;