import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/app_header';
import Footer from './components/app_footer';
import About from './components/app_about';

import UserSignup from './components/user_signup';
import UserSignin from './components/user_signin';
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
          <Route path="/user/signup" component={UserSignup} />
          <Route path="/user/signin" component={UserSignin} />
          <Route path="/user/login" component={UserSignin} />
          <Route path="/about" component={About} />
          <Route path="/office/:id/booking" component={OfficeBooking} />
          <Route path="/office/search" component={OfficeSearch} />
          <Route path="/booking/:id/detail" component={BookingDetail} />

          <Route path="/hello" component={Hello} />
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
