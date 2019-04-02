import React from 'react';
import BookIndexItem from './books_index_item';

class BookIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {coverImgArray: []};
  }

  componentDidMount() {
    this.props.fetchBooks().then(()=>this.extractUrls());
    
    // ((books)=>books.map(
    //   (book) => {
    //     fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn_13}&jscmd=data&format=json`).then(
    //       response => response.json()
    //     ).then(data => Object.values(data)[0].cover.medium).then(coverUrl => this.state.coverImgArray.push(coverUrl));
    //   }
    // ));
  }

  extractUrls(){
    this.props.books.map(book => {
      fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn_13}&jscmd=data&format=json`)
      .then(
          response => response.json()
      )
      .then(data => Object.values(data)[0].cover.small)
        .then(coverUrl => this.setState({ coverImgArray: this.state.coverImgArray.concat([coverUrl])})
    );});
  }

  render() {
    let books = this.props.books.map((book, idx) => {
      
      return <BookIndexItem key={idx} book={book} />
    });

    return (
      <>
        <table>
          <thead>
            <tr className="book-index-col-namesrow-container">
              <th className="book-index-col-name-container">
                cover
              </th>
              <th className="book-index-col-name-container">
                title
              </th>
              <th className="book-index-col-name-container">
                author
              </th>
              <th className="book-index-col-name-container">
                rating
              </th>
              <th className="book-index-col-name-container">
                shelves
              </th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
          {/* <div>
            <ul>
              {books}
            </ul>
          </div> */}
        </table>
        <div>

        </div>
      </>
    );
  }
}

export default BookIndex;