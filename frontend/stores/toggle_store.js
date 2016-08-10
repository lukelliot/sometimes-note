import AppDispatcher from '../dispatcher/dispatcher';
import ToggleConstants from '../constants/toggle_constants';
import { Store } from 'flux/utils';

const ToggleStore = new Store(AppDispatcher);

let _toggles = {
  notebooksIndex: '-closed'
};

ToggleStore._getToggle = (pane) => {
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
    case ToggleConstants.TOGGLE_NOTEBOOKS_INDEX:
      _setToggle('notebooksIndex');
      break;
  }
};

module.exports = ToggleStore;
