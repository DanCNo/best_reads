import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book_actions';
import { fetchBookshelves, createShelving, deleteShelving } from '../../actions/bookshelf_actions';
import BookShowItem from './book_show_item';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    book: state.entities.books[ownProps.match.params.bookId],
    bookshelves: Object.values(state.entities.bookshelves)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBook: (id) => dispatch(fetchBook(id)),
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createShelving: (shelving) => dispatch(createShelving(shelving)),
    deleteShelving: (id) => dispatch(deleteShelving(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowItem);