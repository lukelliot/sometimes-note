import React
  from 'react';
import SessionActions
  from '../actions/session_actions';
import SessionStore
  from '../stores/session_store';

module.exports = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({
      email: "",
      password: ""
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onChange);
  },

  componentWillUnMount() {
    this.listener.remove();
  },

  _onChange() {
    if (SessionStore.isUserLoggedIn) {
      this.context.router.push('/');
    }
  },

  updateEmail(e) {
    this.setState({ email: e.target.value });
  },

  updatePassword(e) {
    this.setState({ password: e.target.value });
  },

  submitUserSignup(e) {
    e.preventDefault();
    SessionActions.signup(this.state);
  },

  render() {
    return(
      <form onSubmit={this.submitUserSignup}>
        <label>Your Email Address</label>
        <input type="text" onChange={this.updateEmail} value={this.state.email} />
        <label>Create a password</label>
        <input type="password" onChange={this.updatePassword} value={this.state.password} />
        <input type="submit" value="Sign Up" />
      </form>
  );}
});
