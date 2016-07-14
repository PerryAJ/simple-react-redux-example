import {combineReducers} from 'redux';
import ActiveBook from './reducer_active_book.js'
import BookReducer from './books_reducer'


// the rootReducer catches all the actions, and every action is sent to every reducer function. Each reducer function
// will return a value, and these values should be new data, not mutated data.
// The reducer functions will be called with the store 'state' as the first param, and the 'action' object that originated
// from the actionCreator function.
const rootReducer = combineReducers({
    books: BookReducer,
    activeBook : ActiveBook
});

export default rootReducer;

