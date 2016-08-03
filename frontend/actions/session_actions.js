import SessionApiUtil
  from '../util/session_api_util';
import AppDispatcher
  from '../dispatcher/dispatcher';
import SessionConstants
  from '../constants/session_constants';

module.exports = {
  signup(user) {
    SessionApiUtil.signup(user, receiveCurrentUser);
  },

  login(user) {
    SessionApiUtil.login(user, receiveCurrentUser);
  },

  logout() {
    SessionApiUtil.logout(receiveCurrentUser);
  },

  receiveCurrentUser(user) {
    AppDispatcher.dispatch({
      actionType
    });
  }
};
