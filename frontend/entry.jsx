// React
import React
  from 'react';
import ReactDOM
  from 'react-dom';
import ReactRouter
  from 'react-router';

// Router
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router history={hashHistory} />,
    document.getElementById('root')
  );
});
