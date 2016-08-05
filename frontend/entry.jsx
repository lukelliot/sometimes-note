import React
  from 'react';
import ReactDOM
  from 'react-dom';
import SessionActions
  from './actions/session_actions';
  // import SessionApiUtil
  //   from './util/session_api_util';
// import LoginForm
//   from './components/login_form';
import SignupForm
  from './components/signup_form';
import App
  from './components/app';
import { Router, Route, IndexRoute, hashHistory, Link }
  from 'react-router';
import NotesActions
  from './actions/notes_actions';
import NotesStore
  from './stores/notes_store';

const ensureLoggedIn = (nextState, replace) => {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
};

// NOTE Make sure to include onEnter={_ensureLoggedIn} to routes
//  that you do not want accessed by non-users
const routes = (
  <Route path='/' component={App}>
    <Route path='signup' component={SignupForm} />
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

window.SessionActions = SessionActions;
window.NotesActions = NotesActions;
window.NotesStore = NotesStore;

// let u = {email: 'lucas', password: 'password'};
// SessionActions.login(u);
// let note = {title: 'title', content: 'content', notebook_id: 1};
// NotesActions.createNote(note);

// SessionActions.signup(u);
