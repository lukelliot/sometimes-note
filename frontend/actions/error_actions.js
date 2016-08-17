// Stores
import ErrorStore from '../stores/error_store';

// Dispatcher
import AppDispatcher from '../dispatcher/dispatcher';

// Constants
import ErrorConstants from '../constants/error_constants';

module.exports = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  }
};
