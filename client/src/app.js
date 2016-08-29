'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect} from 'react-router';

import Layout from './layout/layout';

import LibraryPage from './pages/library';
import AccountPage from './pages/account';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/library" />
    <Route path="/" component={Layout}>
      <Route path="library" component={LibraryPage} />
      <Route path="account" component={AccountPage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('container'),
    function() {
      console.timeEnd('react-app');
    }
  );
});
