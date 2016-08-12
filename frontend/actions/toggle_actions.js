import AppDispatcher from '../dispatcher/dispatcher';
import ToggleConstants from '../constants/toggle_constants';

module.exports = {
  _toggleNotebooksIndex() {
    AppDispatcher.dispatch({
      actionType: ToggleConstants.NOTEBOOKS_INDEX
    });
  },

  _toggleNotebooksDropdown() {
    AppDispatcher.dispatch({
      actionType: ToggleConstants.NOTEBOOKS_DROPDOWN
    });
  },

  _toggleCreateNewNotebookForm() {
    AppDispatcher.dispatch({
      actionType: ToggleConstants.CREATE_NEW_NOTEBOOK_FORM
    });
  }
};
