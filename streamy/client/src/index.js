import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'C:/Users/yosaf/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,   
  document.getElementById('root')
);
