import AppDispatcher
  from '../dispatcher/dispatcher';
import NotesApiUtil
  from '../util/notes_api_util';
import NotesConstants
  from '../constants/notes_constants';
import  ErrorActions
  from './error_actions';

module.exports = {
  fetchAllNotes() {
    NotesApiUtil.fetchAllNotes(
      this.receiveAllNotes,
      ErrorActions.setErrors
    );
  },

  fetchSingleNote(id) {
    NotesApiUtil.fetchSingleNote(
      id,
      this.receiveSingleNote,
      ErrorActions.setErrors
    );
  },

  createNote(note) {
    NotesApiUtil.createNote(
      note,
      this.receiveSingleNote,
      ErrorActions.setErrors
    );
  },

  saveNote(note) {
    NotesApiUtil.saveNote(
      note,
      this.receiveSingleNote,
      ErrorActions.setErrors
    );
  },

  deleteNote(id) {
    NotesApiUtil.deleteNote(
      id,
      this.removeSingleNote,
      ErrorActions.setErrors
    );
  },

  receiveAllNotes(notes) {
    console.log(notes);
    AppDispatcher.dispatch({
      actionType: NotesConstants.FETCHED_ALL_NOTES,
      notes: notes
    });
  },

  receiveSingleNote(note) {
    console.log(note);
    AppDispatcher.dispatch({
      actionType: NotesConstants.FETCHED_SINGLE_NOTE,
      note: note
    });
  },

  removeSingleNote(note) {
    console.log(note);
    AppDispatcher.dispatch({
      actionType: NotesConstants.DELETED_NOTE,
      note: note
    });
  }
};
