import AppDispatcher from '../dispatcher/dispatcher';
import NotebooksConstants from '../constants/notebooks_constants';
import { Store } from 'flux/utils';

const NotebooksStore = new Store(AppDispatcher);

_notebooks = {};
_currentNotebook = undefined;

NotebooksStore.all = () => {
  return Object.keys(_notebooks).map( id => {
    return _notebooks[id];
  });
};

NotebooksStore.find = (id) => {
  return _notebooks[id];
};

function _setAllNotebooks(notebooks) {
  _notebooks = {};
  notebooks.forEach( notebook => {
    _notebooks[notebook.id] = notebook;
  });
  NotesStore.__emitChange();
}

function _setSingleNotebook(notebook) {
  _notebooks[notebook.id] = notebook;
  NotesStore.__emitChange();
}

function _removeSingleNotebook(notebook) {
  delete _notebooks[notebook.id];
  NotesStore.__emitChange();
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
  }
};
