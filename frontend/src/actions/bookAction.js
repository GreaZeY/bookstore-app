import axios from "axios";
import { 
    BOOKS_FAIL, 
    BOOKS_REQUEST, 
    BOOKS_SUCCESS,  
    ALL_BOOKS_FAIL, 
    ALL_BOOKS_REQUEST, 
    ALL_BOOKS_SUCCESS, 
    WISHLIST_FAIL, 
    WISHLIST_REQUEST, 
    WISHLIST_SUCCESS,
    ADD_WISHLIST_FAIL, 
    ADD_WISHLIST_REQUEST, 
    ADD_WISHLIST_SUCCESS,
    REMOVE_WISHLIST_FAIL, 
    REMOVE_WISHLIST_REQUEST, 
    REMOVE_WISHLIST_SUCCESS,
    CLEAR_ERRORS } 
    from "../constants/bookConstants"

export const getBooks=(type)=> async(dispatch)=>{
    try{
      
        dispatch({type:BOOKS_REQUEST});
        const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${type}.json?api-key=${process.env.REACT_APP_NYKEY}`);
        dispatch({
            type:BOOKS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:BOOKS_FAIL,
            payload:error.response
        })
    }

}

export const getAllBooks=(type)=> async(dispatch)=>{
    try{
        dispatch({type:ALL_BOOKS_REQUEST});
    
        const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/${type}.json?api-key=${process.env.REACT_APP_NYKEY}`);
        dispatch({
            type:ALL_BOOKS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ALL_BOOKS_FAIL,
            payload:error.response.data.message
        })
    }

}

export const addToWishList=(userId,book)=> async(dispatch)=>{
    try{
        dispatch({type:ADD_WISHLIST_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };
        console.log(userId,book)
        let url = `/api/v1/addtowishlist` 
        const { data } = await axios.post(
          url,
          {userId:userId,
            book
            },
          config
        );
        dispatch({
            type:ADD_WISHLIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ADD_WISHLIST_FAIL,
            payload:error.response.data.message
        })
    }

}

export const getWishList=(userId)=> async(dispatch)=>{
    try{
        dispatch({type:WISHLIST_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };
        let url = `/api/v1/getwishlist`
        const { data } = await axios.post(
          url,
          {userId:userId},
          config
        );
        dispatch({
            type:WISHLIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:WISHLIST_FAIL,
            payload:error.response.data.message
        })
    }

}

export const remFromFavList=(userId,isbn)=> async(dispatch)=>{
    try{
        dispatch({type:REMOVE_WISHLIST_REQUEST});
        const config = { headers: { "Content-Type": "application/json" } };
        let url = `/api/v1/remfromwishlist`
        const { data } = await axios.post(
          url,
          {userId:userId,
            isbn},
          config
        );
        dispatch({
            type:REMOVE_WISHLIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:REMOVE_WISHLIST_FAIL,
            payload:error.response.data.message
        })
    }

}


// Clear Errors
export const clearErrors= ()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}

