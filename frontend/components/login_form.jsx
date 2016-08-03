import React
  from 'react';
import SessionActions
  from '../actions/session_actions';
import SessionStore
  from '../stores/session_store';
import ErrorStore
    from '../stores/error_store';
import ErrorActions
  from '../actions/error_actions';

module.exports = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({
      email: "",
      password: "",
      errors: []
    });
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
    ErrorActions.clearErrors();

    this.sessionListener = SessionStore.addListener(this._onSessionChange);
  },

  componentWillUnMount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.errors('login')
    });
  },

  _onSessionChange() {
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

  submitUserLogin(e) {
    e.preventDefault();
    SessionActions.login(this.state);
  },

  _handleErrors() {
    let errs = this.state.errors;
    while (errs.length < 2) {
      errs = errs.concat([""]);
    }
    return errs;
  },

  render() {
    let errors = this._handleErrors(),
        passwordError = errors[0],
        emailError = errors[1];

    return(
      <form onSubmit={this.submitUserLogin}>
        <label>Your Email Address</label>
        <input type="text" onChange={this.updateEmail} value={this.state.email} />
          <div>{ emailError }</div>

        <label>Create a password</label>
        <input type="password" onChange={this.updatePassword} value={this.state.password} />
          <div>{ passwordError }</div>

        <input type="submit" value="Log In" />
      </form>
  );}
});
