import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// stuff i wrote
import App from './components/App';
import reducers from './reducers';

// create the redux store that is used in the app
const store = createStore( reducers, {}, applyMiddleware(reduxThunk));
console.log(`in index.js the store is: ${JSON.stringify(store.getState())}`);

ReactDOM.render(
  <Provider store={store}> <App /> </Provider>,
  document.querySelector('#root')
);