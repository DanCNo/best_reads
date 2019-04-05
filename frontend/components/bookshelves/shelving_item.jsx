import React from 'react';



const ShelvingItem = ({ bookshelf, onBookshelf }) => {
  let shelfAction;
  if(onBookshelf === true){
    shelfAction = '-';
  } else {
    shelfAction = '+';
  }

  return (
    <div className="shelving-container">
      <span className="shelving-item">
        {`${bookshelf.title} (${shelfAction})`}
      </span>
    </div>
  );
};

export default ShelvingItem;