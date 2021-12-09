
import "./BookCard.css";

import { Link } from "react-router-dom";
import { Fragment } from "react";



const BookCard = ({ book }) => {

  return (
    <Fragment>

        <div id={book.id} key={book.id} className="cardContainer">
       
            <div className="bookCard">
              <div>
                <img dragable="false" src={book.book_image} alt={book.title} />
              </div>
              <div className="info">
                <h1>{book.title}</h1>
                <p style={{fontSize:'.9vmax'}} >by <span> {book.author}</span></p>
              </div>
            </div>
                  </div>
     
    </Fragment>
  );
};

export default BookCard;

//<Link to={`/${book.id}/details/${book.title}`}>