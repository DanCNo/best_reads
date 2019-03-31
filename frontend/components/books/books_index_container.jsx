import { connect } from 'react-redux';
import { fetchBooks, fetchBook } from "../../actions/book_actions";
import BookIndex from './books_index';

const mapStateToProps = (state) => {
  return({
    books: Object.values(state.entities.books)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchBooks: () => dispatch(fetchBooks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);