import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book_actions';
import { fetchBookshelves, createShelving, deleteShelving } from '../../actions/bookshelf_actions';
import { fetchReviews } from '../../actions/review_actions';
import BookShowItem from './book_show_item';

const mapStateToProps = (state, ownProps) => {

  const book = state.entities.books[ownProps.match.params.bookId];
  const currentUser = state.entities.users[state.session.id];
  let rated = false;

  return ({
    book: book,
    bookshelves: Object.values(state.entities.bookshelves),
    rated: rated,
    
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createShelving: (shelving) => dispatch(createShelving(shelving)),
    deleteShelving: (id) => dispatch(deleteShelving(id)),
    fetchReviews: () => dispatch(fetchReviews())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowItem);