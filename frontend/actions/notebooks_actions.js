import NotebooksApiUtil from '../util/notebooks_api_util';
import NotebooksConstants from '../constants/notebooks_constants';
import AppDispatcher from '../dispatcher/dispatcher';
import ErrorActions from './error_actions';

module.exports = {
  fetchAllNotebooks() {
    NotebooksApiUtil.fetchAllNotebooks(
      this.receiveAllNotebooks,
      ErrorActions.setErrors
    );
  },

  createNotebook(notebookData) {
    NotebooksApiUtil.createNotebook(
      notebookData,
      this.receiveSingleNotebook,
      ErrorActions.setErrors
    );
  },

  saveNotebook(notebookData) {
    NotebooksApiUtil.saveNotebook(
      notebookData,
      this.receiveSingleNotebook,
      ErrorActions.setErrors
    );
  },

  removeNotebook(id) {
    NotebooksApiUtil.destroyNotebook(
      id,
      this.removeSingleNotebook,
      ErrorActions.setErrors
    );
  },

  receiveAllNotebooks(notebooks) {
    AppDispatcher.dispatch({
      actionType: NotebooksConstants.FETCHED_ALL_NOTEBOOKS,
      notebooks: notebooks
    });
  },

  receiveSingleNotebook(notebook) {
    AppDispatcher.dispatch({
      actionType: NotebooksConstants.FETCHED_SINGLE_NOTEBOOK,
      notebook: notebook
    });
  },

  removeSingleNotebook(notebook) {
    AppDispatcher.dispatch({
      actionType: NotebooksConstants.REMOVED_NOTEBOOK,
      notebook: notebook
    });
  }
};
