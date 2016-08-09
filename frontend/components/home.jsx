import React from 'react';
import SessionStore from '../stores/session_store';
import { Link } from 'react-router';


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
      return(
        <div>
          <Link to='signup'>Sign Up</Link>
          <Link to='main'>Main</Link>
          <Link to='signin'>Sign In</Link>
        </div>
      );
    }
});

  // if (SessionStore.isUserLoggedIn()) {
  //   this.context.router.push('notes');
  // }
  // else {

// }
