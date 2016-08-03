import React
  from 'react';
import ReactDOM
  from 'react-dom';
import SessionApiUtil
  from './util/session_api_util';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

document.addEventListener("DOMContentLoaded", () => {
  // ReactDOM.render(
  //   <Router history={hashHistory} />,
  //   document.getElementById('root')
  // );
});

window.SessionApiUtil = SessionApiUtil;

// SessionApiUtil.login(
//   () => { console.log(success); },
//   () => { console.log(error); }
// );
