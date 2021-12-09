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

export const bookReducer = (state = { books: [] }, action) => {

    switch (action.type) {
        case BOOKS_REQUEST:
            return {
                loading: true,
                books: []
            };
            case BOOKS_SUCCESS:
            return {
                loading: false,
                books: action.payload.results.books,
               
            }
            case BOOKS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
        default:
            return state;
    }
}


export const getAllBooksReducer = (state = { allBooks: [] }, action) => {

    switch (action.type) {
                case ALL_BOOKS_REQUEST:
            return {
                loading: true,
                allBooks:[],
                ...state
            };
        
        case ALL_BOOKS_SUCCESS:
            return {
                loading: false,
                allBooks: action.payload.results,
            }
        case ALL_BOOKS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
        default:
            return state;
    }
}

export const getwishListReducer = (state = { wishlist: [] }, action) => {

    switch (action.type) {
                case WISHLIST_REQUEST:
                    case ADD_WISHLIST_REQUEST:
                        case REMOVE_WISHLIST_REQUEST:
            return {
                loading: true,
                ...state
            };
        
        case WISHLIST_SUCCESS:
            case ADD_WISHLIST_SUCCESS:
                case REMOVE_WISHLIST_SUCCESS:
            return {
                loading: false,
                wishlist: action.payload.wishlist
            }
        case WISHLIST_FAIL:
            case ADD_WISHLIST_FAIL:
                case REMOVE_WISHLIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
        default:
            return state;
    }
}
