// React
import React from 'react';
import { Link } from 'react-router';

// Actions
import SessionActions from '../../actions/session_actions';
import ErrorActions from '../../actions/error_actions';

// Stores
import SessionStore from '../../stores/session_store';
import ErrorStore from '../../stores/error_store';



const SessionForm = React.createClass({
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
    ErrorActions.clearErrors();
  },

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.errors('signup')
    });
  },

  _onSessionChange() {
    if (SessionStore.isUserLoggedIn) {
      this.context.router.push('/main');
    }
  },

  updateEmail(e) {
    this.setState({ email: e.target.value });
  },

  updatePassword(e) {
    this.setState({ password: e.target.value });
  },

  _handleErrors() {
    let errs = this.state.errors;
    while (errs.length < 2) {
      errs = errs.concat([""]);
    }
    return errs;
  },

  _submitUser(e) {
    e.preventDefault();

    let path = this.props.location.pathname;
    if (path === '/signup') {
      SessionActions.signup(this.state);
    } else if (path === '/signin' ) {
      SessionActions.login(this.state);
    }
  },

  _setFormContext() {
    let path = this.props.location.pathname;

    if (path === '/signup') {
      return('Create Account');
    } else if (path === '/signin') {
      return('Sign In');
    }
  },

  _setEmailContextDisplay() {
    let path = this.props.location.pathname;

    if (path === '/signup') {
      return('Your Email Address');
    } else if (path === '/signin') {
      return('Email Address or username');
    }
  },

  _setPasswordContextDisplay() {
    let path = this.props.location.pathname;

    if (path === '/signup') {
      return('Create a password');
    } else if (path === '/signin') {
      return('Password');
    }
  },

  _setPolicyContext() {
    let path = this.props.location.pathname;

    if (path === '/signup') {
      return('By clicking Create Account, I agree to the Terms of Service and Privacy Policy');
    } else if (path === '/signin') {
      return('Remember me for 30 days');
    }
  },

  _setDisplayAltLink() {
    let path = this.props.location.pathname;

    if (path === '/signup') {
      return(
        <section className='alt-link'>
          <p>Already have an account?</p>
          <Link to='signin'>Sign In</Link>
        </section>
      );
    } else if (path === '/signin') {
      return(
        <section className='alt-link'>
          <p>Dont have an account?</p>
          <Link to='signup'>Create Account</Link>
        </section>
      );
    }
  },

  render() {
    let errors = this._handleErrors(),
        passwordError = errors[0],
        emailError = errors[1];

    return(
      <article className='form-all'>
        <section className='form-header'>
          <div className='form-logo'></div>
          <div className='form-title'><h1>{ this._setFormContext() }</h1></div>
          </section>
        <section className='form-body'>
          <form onSubmit={ this._submitUser } className='signup-form'>
            <div className='form-content'>
              <ol className='form-list'>
                <li className='client-input'>
                  <label className='input-type'>{ this._setEmailContextDisplay() }<br/>
                    <input className='text-input' type="text" onChange={ this.updateEmail } value={ this.state.email } />
                    <div className='error'><div className='error-message'>{ emailError }</div></div>
                  </label>
                </li>
                <li className='client-input'>
                  <label className='input-type'>{ this._setPasswordContextDisplay() }<br/>
                    <input className='text-input' type="password" onChange={ this.updatePassword } value={ this.state.password } />
                    <div className='error'><div className='error-message'>{ passwordError }</div></div>
                  </label>
                </li>
                <li className='policy'>
                  { this._setPolicyContext() }
                </li>
                <li className='submit'>
                  <input className='signup-submit' type="submit" value={ this._setFormContext() } />
                </li>
              </ol>
            </div>
          </form>
        </section>
        <section>
          { this._setDisplayAltLink() }
        </section>
      </article>
  );}
});

module.exports = SessionForm;
