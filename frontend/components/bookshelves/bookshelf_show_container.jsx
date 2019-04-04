// bookshelf.books is the books passed to bookshelf show

import { connect } from 'react-redux';
import { fetchBookshelf } from "../../actions/bookshelf_actions";
import BookshelfShow from './bookshelf_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.bookshelf,
    bookshelf: state.entities.bookshelves[ownProps.match.params.bookshelfId],
    books: Object.values(state.entities.books)

  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelf: (id) => dispatch(fetchBookshelf(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfShow);