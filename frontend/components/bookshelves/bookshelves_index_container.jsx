import { connect } from 'react-redux';
import { fetchBookshelves, createBookshelf, deleteBookshelf } from "../../actions/bookshelf_actions";
import BookshelvesIndex from './bookshelves_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.bookshelf,
    bookshelves: Object.values(state.entities.bookshelves),
    bookshelf: {title: "", default: false, user_id: ""},

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: (id) => dispatch(deleteBookshelf(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesIndex);