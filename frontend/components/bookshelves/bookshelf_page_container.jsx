import { connect } from 'react-redux';
import { fetchBooks } from "../../actions/book_actions";
import BookshelfPage from './bookshelf_page';

const mapStateToProps = (state) => {
  
  return {
    currentUser: state.entities.users[state.session.id],
    books: state.entities.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfPage);