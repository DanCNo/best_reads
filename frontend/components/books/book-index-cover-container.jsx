import { connect } from 'react-redux';
import BookIndexCover from './book-index-cover';

const mapStateToProps = (state, ownProps) => {

  return ({
    book: ownProps.book
  });
};

export default connect(mapStateToProps, null)(BookIndexCover);