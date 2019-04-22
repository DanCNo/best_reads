import { connect } from 'react-redux';
import { fetchBooks } from "../../actions/book_actions";
import { fetchReviews } from "../../actions/review_actions";
import BookIndex from './books_index';

const mapStateToProps = (state, ownProps) => {

  return({
    books: Object.values(state.entities.books),
    bookshelf_books: ownProps.bookshelf_books,
    bookshelves: state.entities.bookshelves,
    currentUser: state.entities.users[state.session.id],
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchBooks: () => dispatch(fetchBooks()),
    fetchReviews: () => dispatch(fetchReviews())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);