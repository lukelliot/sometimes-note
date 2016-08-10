import NotebooksStore from './notebooks_store';
import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';

const CurrentNotebookStore = new Store(AppDispatcher);

let _currentNotebook = NotebooksStore.all()[0];

CurrentNotebookStore._getCurrentNotebook = () => {
  return _currentNotebook;
};

function _setCurrentNotebook(id) {
  _currentNotebook = NotebooksStore.find(id);
  NotebooksStore.__emitChange();
}

CurrentNotebookStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case NotebooksConstants.SET_CURRENT_NOTEBOOK:
      _setCurrentNotebook(payload.notebookId);
      break;
  }
};
