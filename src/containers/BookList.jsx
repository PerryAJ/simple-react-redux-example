import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import {bindActionCreators} from 'redux';


class BookList extends Component {
    constructor(props){
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    // builds a list of books as <li> elements with an onClick handler
    renderList() {
        return (
            this.props.books.map((book) => {
                return (
                    <li
                        key={book.title}
                        onClick={() => { console.log("clicked, firing selectBook action creator via this.props"); this.props.selectBook(book)}}
                        className="list-group-item">{book.title}</li>
                );
            })
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    // whatever is returned will show up as this.props inside of book list.  So this takes the full state of the
    // application, and it returns stuff as state.
    return {
        books: state.books
    }
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){

    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes a function and a component and returns a 'container' or 'smart component'.  Promotes Booklist.
// needs to know about this new dispatch method, selectBook.  make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);