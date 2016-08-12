import React from 'react';
import NoteFormActions from '../actions/note_form_actions';
import ToggleActions from '../actions/toggle_actions';
import SessionActions from '../actions/session_actions';

const Nav = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _newNote(e) {
    e.preventDefault();
    NoteFormActions.setNewNoteForm();
  },

  _toggleNotebooksIndex(e) {
    e.preventDefault();
    ToggleActions._toggleNotebooksIndex();
  },

  _logout() {
    SessionActions.logout();
    this.context.router.push('/');
  },

  render() {
    return(
      <div className='nav'>
        <img className='nav-new-note icon' src={ Images.newNoteIconDefault } onClick={ this._newNote } height='36' width='36' />
        <div className='toggle-icons'>
          <img className='nav-notes-index icon' src={ Images.notesIndexIconDefault } height='36' width='36' />
          <img className='nav-notebooks-index icon' src={ Images.notebookDrawerIconDefault } onClick={ this._toggleNotebooksIndex } height='36' width='36' />
        </div>
        <img className='nav-logout icon' src={ Images.logoutIcon } onClick={ this._logout } height='36' width='36' />
      </div>
    );
  }
});

module.exports = Nav;
