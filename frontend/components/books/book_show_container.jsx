import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book_actions';
import BookShowItem from './book_show_item';

const mapStateToProps = (state, ownProps) => {
  return ({
    book: state.entities.books[ownProps.match.params.bookId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBook: (id) => dispatch(fetchBook(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowItem);