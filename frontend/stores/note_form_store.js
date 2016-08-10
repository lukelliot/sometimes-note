import AppDispatcher from '../dispatcher/dispatcher';
import NotesActions from '../actions/notes_actions';
import NoteFormConstants from '../constants/note_form_constants';
import { Store } from 'flux/utils';

const NoteFormStore = new Store(AppDispatcher);

let _currentNoteForm;

NoteFormStore.getCurrentNoteForm = () => {
  return _currentNoteForm;
};

function setCurrentNoteForm(note) {
  _currentNoteForm = note;
  NoteFormStore.__emitChange();
}

function setNewNoteForm() {
  _currentNoteForm = false;
  NoteFormStore.__emitChange();
}

NoteFormStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case NoteFormConstants.SET_CURRENT_NOTE_FORM:
      setCurrentNoteForm(payload.note);
      break;
    case NoteFormConstants.SET_NEW_NOTE:
      setNewNoteForm();
      break;
  }
};

module.exports = NoteFormStore;
