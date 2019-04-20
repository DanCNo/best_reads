import { connect } from 'react-redux';
import { fetchBookshelf } from "../../actions/bookshelf_actions";
import { fetchBooks } from "../../actions/book_actions";
import BookshelfShow from './bookshelf_show';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.bookshelf,
    bookshelf: state.entities.bookshelves[ownProps.match.params.bookshelfId],
    books: state.entities.books

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelf: (id) => dispatch(fetchBookshelf(id)),
    fetchBooks: () => dispatch(fetchBooks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfShow);