import AppDispatcher from '../dispatcher/dispatcher';
import ToggleConstants from '../constants/toggle_constants';

module.exports = {
  _toggleNotebooksIndex() {
    AppDispatcher.dispatch({
      actionType: ToggleConstants.TOGGLE_NOTEBOOKS_INDEX
    });
  }
};
