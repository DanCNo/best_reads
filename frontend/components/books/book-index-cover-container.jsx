import { connect } from 'react-redux';
import BookIndexCover from './book-index-cover';

const mapStateToProps = (state, ownProps) => {

  return ({
    isbn: ownProps.isbn
  });
};

export default connect(mapStateToProps, null)(BookIndexCover);