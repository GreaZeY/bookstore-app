import { Fragment} from "react";
import './BookDetails.css'
import {addToWishList} from "../../actions/bookAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const BookDetails = ({book}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated,user } = useSelector((state) => state.user);
  
const addToWishListfunc = ()=>{
  if(!isAuthenticated) return history.push('/login?redirect=wishlisht')
  console.log('clicked',user.name)
  dispatch(addToWishList(user._id,{
    isbn: book.primary_isbn13,
    title: book.title,
     bookCover:book.book_image,
     author:book.author
  }));  
}
    return (
      <Fragment>
       
                  <div className="detailsContainer">
                    <div className="left">
                      <img src={book.book_image} alt={book.title} />
                      </div>
                      <div className="right">
                        <h1>{book.title}</h1>
                        <p style={{marginTop:'3vmax'}} className='rating'><b>Author</b>: {book.author}</p>
                        <p className='rating'><b>Rank</b> : {book.rank}</p>
                        <p className='rating'><b>Last week's Rank</b> : {book.rank_last_week?book.rank_last_week:'Not Ranked'}</p>
                        <p className='tagline'>{book.tagline&&book.tagline}</p>
                        <h2>Description</h2>
                        <p>{book.description}</p>
                        <h1 style={{marginTop:'2vmax'}} >Price</h1>
                        <button style={{marginRight:'2vmax', width:'8vmax'}} className="wishlist">Buy</button>
                        <button className="wishlist" onClick={addToWishListfunc} >Add to wishlisht</button>
                        <p style={{marginTop:'2vmax'}} className='rating'><b>ISBN</b> : {book.primary_isbn13}</p>
                        <h2 >Compare on Other sites</h2>
                          <ul>
                            {
                            book.buy_links.map(link=><li><a href={link.url} target='_blank'>{link.name}</a></li>)
                            }
                          </ul>
                       




                      </div>
                      
                  </div>
              
          
      </Fragment>
    );
  
}

export default BookDetails

