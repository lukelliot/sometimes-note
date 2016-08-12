import AppDispatcher from '../dispatcher/dispatcher';
import SessionConstants from '../constants/session_constants';
import { Store } from 'flux/utils';

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _userHasBeenFetched = false;

const _login = (user) => {
  _currentUser = user;
  _userHasBeenFetched = true;
  SessionStore.__emitChange();
};

const _logout = () => {
  _currentUser = {};
  _userHasBeenFetched = false;
  SessionStore.__emitChange();
};

SessionStore.defaultNotebookId = () => {
  return _currentUser.defaultNotebookId;
};

SessionStore.currentUser = () => {
  return _currentUser;
};

SessionStore.isUserLoggedIn = () => {
  return _userHasBeenFetched;
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
};

module.exports = SessionStore;
