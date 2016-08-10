import React from 'react';
import NoteFormActions from '../actions/note_form_actions';
import ToggleActions from '../actions/toggle_actions';

module.exports = React.createClass({
  _newNote(e) {
    e.preventDefault();
    NoteFormActions.setNewNoteForm();
  },

  _toggleNotebooksIndex(e) {
    e.preventDefault();
    ToggleActions._toggleNotebooksIndex();
  },

  render() {
    return(
      <div className='nav'>
        <button onClick={ this._newNote }>New Note</button>
        <button>Notes</button>
        <button onClick={ this._toggleNotebooksIndex }>Notebooks</button>
        <button>Profile</button>
      </div>
    );
  }
});
