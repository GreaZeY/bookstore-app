import React, { Fragment, useEffect, useState } from "react";
import "./books.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAllBooks, getBooks } from "../../actions/bookAction";
import Loading from '../Loader/Loading'
import BookCard from "../Home/BookCard";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import BookDetails from "../BookDetails/BookDetails";
import {AiOutlineArrowLeft} from "react-icons/ai"

const Books = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [show,setShow] = useState(false)
  const { loading, error, allBooks } =
    useSelector((state) => state.allBooks);

    const { loading:bLoading, error:bError, books } =
    useSelector((state) => state.books);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAllBooks('names')); //getting all categories
    dispatch(getBooks('manga'));    //getting initial books to show
  }, [dispatch, error, alert]);


// getting the clicked category and then getting the book list of that category.
  const getCategory = (e)=>{
    let category = e.target.innerHTML.replace(' ','-')
    dispatch(getBooks(category));
  }
  
// getting the clicked book and showing its details  
  const showDetails=async (bookISBN)=>{
    if(show.status===false){
      let book = await books.filter(book=>book.primary_isbn10===bookISBN)
      setShow({
          status:true,
          book:book[0]
      })
    } else{
      setShow({status:false})
    }
  }
  return (
    <>
    {
      show.status?
      <>
         <MetaData title={show.book.title} />
      <AiOutlineArrowLeft onClick={()=>setShow({status:false})} className='back' />
          <BookDetails book={show.book} />     
          </>
      :
    <Fragment>
        <div className="booksbox">
                  <MetaData title="Books" />
          <div className="filterBox">
            <div className="filterh1">
    
              <Typography style={{marginBottom:'2.5vmax'}}>Browse by Categories</Typography>
              <div onClick={getCategory} className="categories">
              {
                loading?
                <div class="load">{loading && <Loading />}</div>
                :
                allBooks&&
                allBooks.map(category=><p key={category.list_name} >{category.list_name}</p>)
              }
              </div>
            </div>
          </div>
          <div className="search">
            {!books ? (
              <h2 className="booksHeading">{`Currently no book is in the stock under this category :(`}</h2>
            ) : (
              <h2 className="booksHeading">Books</h2>
            )}
            <div className="books"  >
              {books &&
                books.map((book) => (
                  <div key={book.primary_isbn10} onClick={()=>showDetails(book.primary_isbn10)}>
                  <BookCard  book={book} />
                  </div>
                ))}
            </div>
            {<div class="load">{bLoading && <Loading />}</div>}
          </div>
        </div>
    </Fragment>
                }
                </>
  );
};

export default Books;
