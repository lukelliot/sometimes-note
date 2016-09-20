// Dispatcher
import AppDispatcher from '../dispatcher/dispatcher';

// Constants
import NotesConstants from '../constants/notes_constants';

// Flux
import { Store } from 'flux/utils';

const NotesStore = new Store(AppDispatcher);

let _notes = {};

NotesStore.allNotesByNotebookId = (notebookId) => {
  let notesByNotebookId = [];
  Object.keys(_notes).forEach( id => {
    if (_notes[id].notebookId === notebookId) {
      notesByNotebookId.push(_notes[id]);
    }
  });
  return notesByNotebookId;
};

NotesStore.all = () => {
  return Object.keys(_notes).map( id => {
    return _notes[id];
  });
};

NotesStore.find = (id) => {
  return _notes[id];
};

function _setAllNotes(notes) {
  _notes = {};
  notes.forEach( note => _notes[note.id] = note);
  NotesStore.__emitChange();
}

function _setSingleNote(note) {
  _notes[note.id] = note;
  NotesStore.__emitChange();
}

function _removeNote(note) {
  delete _notes[note.id];
  NotesStore.__emitChange();
}

NotesStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case NotesConstants.FETCHED_ALL_NOTES:
      _setAllNotes(payload.notes);
      break;
    case NotesConstants.FETCHED_SINGLE_NOTE:
      _setSingleNote(payload.note);
      break;
    case NotesConstants.DELETED_NOTE:
      _removeNote(payload.note);
      break;
  }
};

module.exports = NotesStore;
