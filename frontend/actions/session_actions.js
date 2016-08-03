import SessionApiUtil
  from '../util/session_api_util';
import AppDispatcher
  from '../dispatcher/dispatcher';
import SessionConstants
  from '../constants/session_constants';
import ErrorActions
    from '../actions/error_actions';
import { hashHistory }
  from 'react-router';

module.exports = {
  signup(user) {
    SessionApiUtil.signup(
      user,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  login(user) {
    SessionApiUtil.login(
      user,
      this.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logout() {
    SessionApiUtil.logout(this.removeCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }
};
