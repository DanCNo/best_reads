## Best Reads

[Live Link](http://bestreads-fullstack.herokuapp.com "Best Reads")

### About

Best Reads is a web application clone of Good Reads, where users can maintain a virtual bookshelf and review books. 

### Basic Features 

  * User-Auth
    * Users can sign up and log in and log out. 
    * Users are restricted from creating bookshelves or reviewing books unless they are logged in.

  * Books
    * Books have a show page with a cover picture and details

  * Bookshelves
    * Bookshelves allow users to organize their books. 
    * Custom Bookshelves can be created or deleted at any time.
    * Bookshelves have a show page containing all the books on each individual bookshelf.
    * Users can switch quickly between each bookshelf with fast loading times. 

  * Reviews
    * Users can create a review on a specific book.
    * Users can update a review on a specific book.
    * Users can delete a review on a specific book.
    * Users have write access only for their reviews.


### Technologies Used

  * Backend
    * Database: PostgresSQL
    * Model, Controllers, Routing: Ruby on Rails

  * Frontend
    * React
    * Redux
    * HTML5 / CSS3

### Highlights

Start Page with session form rendered in two different spots

![best reads start page](https://github.com/DanCNo/best_reads/blob/master/app/assets/images/bestreadsstartpage.png)

Home Page with responsive create and delete custom bookshelves and with index of books that have comma separated bookshelf components

![best reads home page](https://github.com/DanCNo/best_reads/blob/master/app/assets/images/bestreadshomepage.png)

Book Show Page with responsive CRUD reviews with only review owners able to update and delete

![best reads book show](https://github.com/DanCNo/best_reads/blob/master/app/assets/images/bestreadsbookshowpage.png)

###Code Snippet

To keep a normalized state, the joins table Shelving that connects books and bookshelves is represented in the Redux state by association id arrays. The bookshelf reducer listens for the shelving actions to affect a change in the state via it's association id arrays.

```ruby

const bookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){

    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;

    case RECEIVE_BOOKSHELF:
      
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});

    case REMOVE_BOOKSHELF:
      newState = merge({}, state);
      delete newState[action.bookshelf.id];
      return newState;

    case RECEIVE_SHELVING:
      newState = merge({}, state);
      const addToBookshelf = newState[action.shelving.bookshelf_id];
      addToBookshelf.book_ids.push(action.shelving.book_id);
      addToBookshelf.shelving_ids.push(action.shelving.id);
      return newState;

    case REMOVE_SHELVING:
      newState = merge({}, state);
      const removeFromBookshelf = newState[action.shelving.bookshelf_id];
      removeFromBookshelf.book_ids = removeFromBookshelf.book_ids.filter(id => id !== action.shelving.book_id);
      removeFromBookshelf.shelving_ids = removeFromBookshelf.shelving_ids.filter(id => id !== action.shelving.id);
      return newState;
      
    default:
      return state;
  }
};

export default bookshelvesReducer;

```

### Future Features

  * Search
  * Genre Tags