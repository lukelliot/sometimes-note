import NoteFormConstants from '../constants/note_form_constants';
import AppDispatcher from '../dispatcher/dispatcher';

module.exports = {
  setCurrentNoteForm(note) {
    AppDispatcher.dispatch({
      actionType: NoteFormConstants.SET_CURRENT_NOTE_FORM,
      note: note
    });
  },

  setNewNoteForm() {
    AppDispatcher.dispatch({
      actionType: NoteFormConstants.SET_NEW_NOTE,
    });
  }
};
