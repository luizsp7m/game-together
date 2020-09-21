import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);