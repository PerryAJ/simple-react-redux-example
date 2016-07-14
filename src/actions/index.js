export function selectBook(book){
    console.log("A book has been selected and is firing an action:", book.title);
    
    //selectBook is an actionCreator that needs to return an Action, which is an object with a type property
    // this action will be received by the reducer, where it can be acted on.  The 'book' in this object is the same
    // think as if I had written it as book : book.  ES6 just gives me some syntactic sugar to auto-map the key-value
    // because they share a name.
    return {
        type: 'BOOK_SELECTED',
        book
    };
}

