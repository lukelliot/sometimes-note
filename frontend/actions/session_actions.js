import SessionApiUtil
  from '../util/session_api_util';
import AppDispatcher
  from '../dispatcher/dispatcher';
import SessionConstants
  from '../constants/session_constants';
import { hashHistory }
  from 'react-router';

module.exports = {
  signup(user) {
    SessionApiUtil.signup(user, this.receiveCurrentUser);
  },

  login(user) {
    SessionApiUtil.login(user, this.receiveCurrentUser);
  },

  logout() {
    SessionApiUtil.logout(this.receiveCurrentUser);
  },

  // receiveCurrentUser(currentUser) {
  //   switch (currentUser.id) {
  //     case true:
  //       AppDispatcher.dispatch({
  //         actionType: SessionConstants.LOGIN,
  //         currentUser: currentUser
  //       });
  //       break;
  //     case false:
  //       AppDispatcher.dispatch({
  //         actionType: SessionConstants.LOGOUT,
  //       });
  //       hashHistory.push('/login');
  //       break;
  //   }
  // }

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
