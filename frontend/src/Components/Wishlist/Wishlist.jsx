
import React, { useEffect, useState } from "react";
import "./wishlist.css";
import MetaData from "../layout/MetaData";
import {useSelector,useDispatch} from "react-redux";
import { useAlert } from "react-alert";
import {getWishList, remFromFavList,clearErrors} from "../../actions/bookAction";
const Wishlist = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error, wishlist } = useSelector((state) => state.wishlist);
    const { isAuthenticated, user } =
    useSelector((state) => state.user);

    useEffect(() => {
        if(isAuthenticated){
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getWishList(user._id)); 
       }   //getting wishlist items
      }, [dispatch, error, alert,isAuthenticated]);


    const deleteItem = (isbn)=> {
        dispatch(remFromFavList(user._id,isbn)); 
    }

  return (
    <div className="wishlist">
      <div className="top">
     
       
      </div>

      <div className="wishlistContainer">
        <MetaData title="My wishlist" />
        <div className="index">
          <h1>Your Wishlist</h1>
        </div>

        {
         wishlist && wishlist.length!==0? (
          wishlist.map((item) => {
            return (
              
              <div key={item.isbn} className="citems">
                <a href={`/product`}><img draggable="false" src={item.bookCover} alt={item.title} /></a> 
                <div className="right">
                <a href={`/product`}><h1>{item.title}</h1></a>
                <p>Author : {item.author}</p>
                  <div className="block">
                  
                    <span>In stock</span>
                    <br/>
                    
                    <button key={item.id} onClick={() => deleteItem(item.isbn)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>You wishlist is empty :(</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
