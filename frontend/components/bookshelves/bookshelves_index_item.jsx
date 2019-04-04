// link to show bookshelf and num of books inside ()



const BookshelvesIndexItem = ({ bookshelf }) => {
  let booksCount;
  // code to figure out bookshelf.books.count

  return (
    <div>
      <Link>{`${bookshelf.title} (${})`}</Link>
    </div>
  );
};

export default BookIndexItem;