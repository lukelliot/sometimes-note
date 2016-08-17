// Dispatcher
import AppDispatcher from '../dispatcher/dispatcher';

// Constants
import ToggleConstants from '../constants/toggle_constants';

// Flux
import { Store } from 'flux/utils';

const ToggleStore = new Store(AppDispatcher);

let _toggles = {
  notebooksIndex: '-closed',
  notebooksDropdown: '-closed',
  createNewNotebookForm: '-closed'
};

ToggleStore.getToggle = (pane) => {
  return _toggles[pane];
};

function _setToggle(pane) {
  if (_toggles[pane] === '-closed') {
    _toggles[pane] = '-open';
  } else if (_toggles[pane] === '-open') {
    _toggles[pane] = '-closed';
  }

  ToggleStore.__emitChange();
}

ToggleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ToggleConstants.NOTEBOOKS_INDEX:
      _setToggle('notebooksIndex');
      break;
    case ToggleConstants.NOTEBOOKS_DROPDOWN:
      _setToggle('notebooksDropdown');
      break;
    case ToggleConstants.CREATE_NEW_NOTEBOOK_FORM:
      _setToggle('createNewNotebookForm');
      break;
  }
};

module.exports = ToggleStore;
