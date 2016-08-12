import AppDispatcher from '../dispatcher/dispatcher';
import SessionApiUtil from '../util/session_api_util';
import SessionConstants from '../constants/session_constants';
import ErrorActions from './error_actions';

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

  receiveCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: user
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }
};
