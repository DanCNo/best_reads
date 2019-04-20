
import React from 'react';
import BookIndexContainer from '../books/books_index_container';
class BookshelfShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchBookshelf(this.props.match.params.bookshelfId);
  }

  render() {
    let bookshelf_books = [];
    if(this.props.bookshelf){
      
      bookshelf_books = this.props.bookshelf.book_ids.map((id) => 
        this.props.books[id]);
    }

    if (!this.props.bookshelf) {
      return null;
    }
    return (
      <div>
        <div>
          Bookshelf: {this.props.bookshelf.title}
        </div>
        <div>
          <BookIndexContainer bookshelf_books={bookshelf_books}/>
        </div>
      </div>
    );
  }
}

export default BookshelfShow;