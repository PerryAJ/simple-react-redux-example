import React, { Component, PropTypes } from 'react';

export default class BookList extends Component {
    static propTypes = {
        bookName : PropTypes.string
    };


    render() {
        const bookName = this.props.bookName;
        return (
            <div>
                selected book: <h2>{bookName}</h2>
            </div>
        );
    }
}