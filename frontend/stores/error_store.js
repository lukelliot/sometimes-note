import AppDispatcher from '../dispatcher/dispatcher';
import ErrorConstants from '../constants/error_constants';
import { Store } from 'flux/utils';

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

const _setErrors = (form, errors) => {
  _form = form;
  _errors = errors;
  ErrorStore.__emitChange();
};

const _clearErrors = () => {
  _form = "";
  _errors = [];
  ErrorStore.__emitChange();
};

ErrorStore.errors = (form) => {
  if (form === _form) {
    return _errors.slice();
  }
  return [];
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload.form, payload.errors);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      break;
  }
};
 module.exports = ErrorStore;
