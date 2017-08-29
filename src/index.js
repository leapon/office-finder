import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import OfficeSearch from './components/office_search';
import OfficeBooking from './components/office_booking';
import BookingDetail from './components/booking_detail';
import reducers from './reducers';

import SimpleForm from './components/simple_form';
import Hello from './components/hello';
import Clock from './components/clock';
import Calendar from './components/calendar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/office/:id/booking" component={OfficeBooking} />
          <Route path="/booking/:id/detail" component={BookingDetail} />
          <Route path="/test/simple" component={SimpleForm} />
          <Route path="/test/clock" component={Clock} />
          <Route path="/test/calendar" component={Calendar} />
          <Route path="/" component={OfficeSearch} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'));
