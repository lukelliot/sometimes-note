// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

// Front-End Authorization
import SessionStore from './stores/session_store';
import SessionActions from './actions/session_actions';

// Routes
import App from './components/app';
import Home from './components/home';
import SessionForm from './components/session/session_form';
import Main from './components/main';
import NotebooksIndex from './components/notebooks/notebooks_index';

const _ensureLoggedIn = (nextState, replace) => {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/signin');
  }
};

const _redirect = (nextState, replace) => {
  replace('/signin');
};

const routes = (
  <Route path='/' component={ App }>
    <IndexRoute onEnter={ _redirect } component={ Home } />
    <Route path='home' component={ Home } />
    <Route path='signup' component={ SessionForm } />
    <Route path='signin' component={ SessionForm } />
    <Route path='main' onEnter={ _ensureLoggedIn } component={ Main } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('root')
  );
});
