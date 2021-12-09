import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { getAllBooksReducer, bookReducer, getwishListReducer } from "./reducers/bookReducer";
import { userReducer,profileReducer, forgotPasswordReducer } from "./reducers/userReducer";


const reducer = combineReducers({
    books:bookReducer,
    allBooks:getAllBooksReducer,
    user:userReducer,
    profile: profileReducer,
    forgotPassword:forgotPasswordReducer,
    wishlist:getwishListReducer
});
 let initialState = {};
 const middleware = [thunk];
 const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
 )

 export default store;