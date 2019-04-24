import React from 'react';
import BookshelvesIndexItem from './bookshelves_index_item';

class BookshelvesIndex extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = this.props.bookshelf;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.deleteBookshelf = this.props.deleteBookshelf.bind(this);
  }

  componentDidMount() {

    this.props.fetchBookshelves();

  }

  update(field) {

    return e => {

      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const bookshelf = Object.assign({}, this.state);
    this.props.createBookshelf(bookshelf);
    this.setState({
      title: "", default: false, user_id: ""
    });
  }

  handleDelete(id) {
    this.props.deleteBookshelf(id);


  }

  render() {
  
    let bookshelves = this.props.bookshelves.map((bookshelf, idx) => {
      const deleteButtonForm = (idx > 2 ) ? (
        <div>
          <form onSubmit={() => this.deleteBookshelf(bookshelf.id)}>
            <input className="delete-bookshelf-submit" type="submit" value="delete" />
          </form>
        </div>
      ) : (
          <div></div>
        )
      return (
        <div key={`bookshelf-div1-${idx}`}>
          <BookshelvesIndexItem key={`bookshelf-${idx}`}
            bookshelf={bookshelf}
          />
          <div>
            {deleteButtonForm}
          </div>
        </div>
        )
        
    });
    
    return (
      <div className="bookshelf-index-container">
        <div className="mybooks_text_container">
          <span className= "mybooks_text">My Bookshelves</span>
        </div>
        <div className="default-bookshelf-container">
          {bookshelves.slice(0,3)}
        </div>
        <div className="custom-bookshelf-container">
          {bookshelves.slice(3)}
        </div>
        <div>
          <form className="add-bookshelf-form" onSubmit={this.handleSubmit}>
            <div>
              <input type="text"
                className = "add-bookshelf-input"
                value={this.state.title}
                onChange={this.update('title')}
                required="required"
              />
            </div>
            <div className="add-bookshelf-submit-container">
              <input className="add-bookshelf-submit" type="submit" value="Add" />
            </div>

          </form>
        </div>
      </div>
      
    );
  }
}

export default BookshelvesIndex;