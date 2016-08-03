import React
  from 'react';
import ReactDOM
  from 'react-dom';
import SessionApiUtil
  from './util/session_api_util';
import SessionActions
  from './actions/session_actions';
import { Router, Route, IndexRoute, hashHistory, Link }
  from 'react-router';

document.addEventListener("DOMContentLoaded", () => {
  // ReactDOM.render(
  //   <Router history={hashHistory} />,
  //   document.getElementById('root')
  // );
});

window.SessionApiUtil = SessionApiUtil;
window.SessionActions = SessionActions;

// SessionApiUtil.login(
//   () => { console.log(success); },
//   () => { console.log(error); }
// );
