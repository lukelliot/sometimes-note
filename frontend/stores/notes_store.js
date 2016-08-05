import AppDispatcher
  from '../dispatcher/dispatcher';
import { Store }
  from 'flux/utils';
import NotesConstants
  from '../constants/notes_constants';

const NotesStore = new Store(AppDispatcher);

let _notes = {};

NotesStore.all = () => {
  return Object.keys(_notes).map( note => {
    return _notes[note.id];
  });
};
