import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index';

// initial store object -- acts a little like 'defaultProps' in a component
const defaultStore = {
    books: [],
    activeBook : {}
};

// if we wanted to apply more middleware, we could compose them into a single enhancer object to pass in as the third
// argument to createStore, like this....
// const enhancers = compose(applyMiddleware(someMiddlewarePackage), window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, defaultStore, window.devToolsExtension ? window.devToolsExtension() : f => f);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
