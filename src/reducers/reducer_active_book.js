// state argument is not application state, only the state of this particular reducer is responsible for, and represents
// the state of the Redux store, not a react component state.
// Need to always return a defined state, so we use the ES6 syntax to auto-init state if nothing is passed in.
export default function(state = "", action){

    // we check the 'type' of the action.  If the type matches the thing we want this reducer to be responsible for,
    // then we do something to the data and return whatever we want to the root reducer (which then sends the store object
    // to the components connected to the Provider.
    switch(action.type){

        // selected book action returns the selected book, which is attached to the action created by the actionCreator
        case 'BOOK_SELECTED' : {console.log("Book selected reducer is ", action.book);return action.book;}
    }

    // if the action is not a type this reducerFunction knows how to deal with, we simply return the state as we got it.
    return state;
}