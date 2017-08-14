import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import Hello from './components/hello';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h4>header</h4>
        <Route path="/" component={App} />
        <Route path="/hello" component={Hello} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'));
