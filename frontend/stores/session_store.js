import AppDispatcher
  from '../dispatcher/dispatcher';
import { Store }
  from 'flux/utils';
import SessionConstants
  from '../constants/session_constants';

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

SessionStore.currentUser = () => {
  return _currentUser;
};

SessionStore.isUserLoggedIn = () => {
  return _userHasBeenFetched;
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user).bind(this);
      break;
    case SessionConstants.LOGOUT:
      _logout().bind(this);
      break;
  }
};

module.exports = SessionStore;
