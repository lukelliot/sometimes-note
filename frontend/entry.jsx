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

// import NotesActions from './actions/notes_actions';

const _ensureLoggedIn = (nextState, replace) => {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
};

// NOTE Make sure to include onEnter={_ensureLoggedIn} to routes
//  that you do not want accessed by non-users
const routes = (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='home' component={ Home } />
    <Route path='signup' component={ SessionForm } />
    <Route path='signin' component={ SessionForm } />
    <Route path='main' component={ Main } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currrentUser);
  }

  ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('root')
  );
});

// window.SessionActions = SessionActions;
// window.NotesActions = NotesActions;
// window.NotesStore = NotesStore;

// let u = {email: 'lucas', password: 'password'};
// SessionActions.login(u);
// let note = {title: 'title', content: 'content', notebook_id: 1};
// NotesActions.createNote(note);

// SessionActions.signup(u);
