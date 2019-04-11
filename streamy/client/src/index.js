import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'C:/Users/yosaf/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,   
  document.getElementById('root')
);
