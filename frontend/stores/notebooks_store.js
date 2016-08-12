import AppDispatcher from '../dispatcher/dispatcher';
import NotebooksConstants from '../constants/notebooks_constants';
import { Store } from 'flux/utils';

const NotebooksStore = new Store(AppDispatcher);

let _notebooks = {},
    _currentNotebook = {};

NotebooksStore.all = () => {
  return Object.keys(_notebooks).map( id => {
    return _notebooks[id];
  });
};

NotebooksStore.find = (id) => {
  return _notebooks[id];
};

NotebooksStore.getCurrentNotebook = () => {
  return _currentNotebook;
};

function _setCurrentNotebook(notebook) {
  if (notebook) {
    _currentNotebook = notebook;
  } else if (_currentNotebook.id === undefined) {
    _currentNotebook = NotebooksStore.all()[0];
  }
  NotebooksStore.__emitChange();
}

function _setAllNotebooks(notebooks) {
  _notebooks = {};
  notebooks.forEach( notebook => {
    _notebooks[notebook.id] = notebook;
  });
  _setCurrentNotebook();
  NotebooksStore.__emitChange();
}

function _setSingleNotebook(notebook) {
  _notebooks[notebook.id] = notebook;
  NotebooksStore.__emitChange();
}

function _removeSingleNotebook(notebook) {
  delete _notebooks[notebook.id];
  NotebooksStore.__emitChange();
}

NotebooksStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case NotebooksConstants.FETCHED_ALL_NOTEBOOKS:
      _setAllNotebooks(payload.notebooks);
      break;
    case NotebooksConstants.FETCHED_SINGLE_NOTEBOOK:
      _setSingleNotebook(payload.notebook);
      break;
    case NotebooksConstants.REMOVED_NOTEBOOK:
      _removeSingleNotebook(payload.notebook);
      break;
    case NotebooksConstants.SET_CURRENT_NOTEBOOK:
      _setCurrentNotebook(payload.notebook);
  }
};

module.exports = NotebooksStore;
