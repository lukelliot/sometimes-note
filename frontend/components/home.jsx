import React from 'react';
import SessionStore from '../stores/session_store';
import { Link } from 'react-router';


const Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
      return(
        <div>
          <Link to='signup'>Sign Up</Link><br/>
          <Link to='main'>Main</Link><br/>
          <Link to='signin'>Sign In</Link><br/>
        </div>
      );
    }
});

module.exports = Home;
