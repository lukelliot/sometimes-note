import React
  from 'react';
import ReactDOM
  from 'react-dom';
import SessionApiUtil
  from './util/session_api_util';
import SessionActions
  from './actions/session_actions';
import LoginForm
  from './components/login_form';
import SignupForm
  from './components/signup_form';
import App
  from './components/app';
import { Router, Route, IndexRoute, hashHistory, Link }
  from 'react-router';

// function _enterFunc(nextState, replace) {
//   if (!userLoggedIn) {
//     replace("/login")
//   }
// }

const routes = (
  <Route path='/' component={App}>
    <Route path="signup" component={SignupForm} />
</Route>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('root')
  );
});

window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;

// SessionApiUtil.login(
//   () => { console.log(success); },
//   () => { console.log(error); }
// );
