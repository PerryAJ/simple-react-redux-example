import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionCreators from '../actions/index';

import BookList from '../containers/BookList.jsx'
import SelectedBook from './SelectedBook';

class App extends Component {

    maybeRenderSelected(book){
        if (book && book.title !== ""){
            console.log("Have an active book to show named ", book);
            return <SelectedBook bookName={book.title}/>
        }
    }

    render() {
        const { activeBook } = this.props;
        console.log("Active book is ", activeBook);
        return (
            <div>
                <BookList />
                {this.maybeRenderSelected(activeBook)}
            </div>
        );
    }
}


// here we just use ES6 spread operator to map everything in our state (which is sent in through our rootReducer)
// to the connected component's props
function mapStateToProps(state){
    return { ...state }
}

// bind the dispatch to our action creators, so we don't need to explicitly pass dispatch everywhere
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}


// this is where we connect our store, and our action creators to our app through props
export default connect(mapStateToProps, mapDispatchToProps)(App)