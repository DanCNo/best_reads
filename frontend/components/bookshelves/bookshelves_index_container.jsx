import { connect } from 'react-redux';
import { fetchBookshelves } from "../../actions/bookshelf_actions";
import BookshelvesIndex from './bookshelves_index';

// need some kind of way to pass user id, owner of bookshelves. user.bookshelves
// conditional? if ownProps has something?

const mapStateToProps = (state) => {
  return ({
    bookshelves: Object.values(state.entities.bookshelves)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesIndex);