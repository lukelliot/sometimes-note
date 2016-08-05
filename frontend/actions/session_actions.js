import AppDispatcher
from '../dispatcher/dispatcher';
import SessionApiUtil
  from '../util/session_api_util';
import SessionConstants
  from '../constants/session_constants';
import ErrorActions
    from './error_actions';

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
    console.log(currentUser);
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    console.log('logged out');
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }
};
