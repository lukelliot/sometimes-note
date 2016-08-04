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
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  _onErrorChange() {

    this.setState({
      errors: ErrorStore.errors('signup')
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

  submitUserSignup(e) {
    e.preventDefault();
    SessionActions.signup(this.state);
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
      <div className='form-all'>
        <div className='form-header'>
          <div className='form-logo'></div>
          <div className='form-title'><h1>Create Account</h1></div>
        </div>
        <div className='form-body'>
          <form onSubmit={ this.submitUserSignup } className='signup-form'>
            <div className='form-content'>
              <ol>
                <li className='input'>
                  <label className='label'>Your Email Address</label><br/>
                  <input className='email-text-input' type="text" onChange={ this.updateEmail } value={ this.state.email } />
                  <div className='error'><div className='error-message'>{ emailError }</div></div>
                </li>
                <li className='input'>
                  <label className='label'>Create a password</label><br/>
                  <input className='password-text-input' type="password" onChange={ this.updatePassword } value={ this.state.password } />
                  <div className='error'><div className='error-message'>{ passwordError }</div></div>
                </li>
                <li className='policy'>
                  By clicking Create Account, I agree to the Terms of Service and Privacy Policy
                </li>
                <li className='submit'>
                  <input className='signup-submit' type="submit" value="Create Account" />
                </li>
              </ol>
            </div>
          </form>
        </div>
      </div>
  );}
});
