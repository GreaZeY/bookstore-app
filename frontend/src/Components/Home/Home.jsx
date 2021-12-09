import React, { Fragment,useEffect,useState } from 'react';

import Loading from '../Loader/Loading'
import {getBooks, clearErrors} from "../../actions/bookAction";
import {useSelector,useDispatch} from "react-redux";
import BookCard from './BookCard.jsx'
import {useAlert} from "react-alert"
import { Link } from "react-router-dom";
import './Home.css'
import MetaData from "../layout/MetaData"; 
import BookDetails from "../BookDetails/BookDetails";
import {AiOutlineArrowLeft} from "react-icons/ai"

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const [show,setShow] = useState(false)



    const { loading, error, books} =
      useSelector((state) => state.books);
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      dispatch(getBooks('Hardcover-Fiction'));
      console.log('home')
    }, [dispatch, error, alert]);
  
      
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
              <MetaData title={`Bookstore`} />
              <Link to='/books'>
                <img
                draggable="false" 
                  className="CarouselImage"
                  src='images/1.webp'
                  alt='banner'
                />
                </Link>

                <div className="slogan">
                <h1> Selling books means giving life to someone.</h1>
                The perfect gift for every book lover on your list, including you. 📚
                </div>
                <div className="discover">
                <h1>Best Seller</h1>
                <div className="bookContainer">
                { 
                books&&
                books.map(book=>(
                  <div key={book.primary_isbn10} onClick={()=>showDetails(book.primary_isbn10)}>
                <BookCard  book={book}></BookCard>
                </div>
                )
                )
                }
                </div>
                </div>
                <div className='loader'>{loading?<Loading/>:''}</div> 
        </Fragment>
              }
              </>
    )
}

export default Home
