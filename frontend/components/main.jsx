// React
import React from 'react';

// Children
import Nav from './nav';
import NotebookDrawer from './notebooks/notebooks_index';
import NotesIndex from './notes/notes_index';
import NoteForm from './notes/note_form';
import CreateNewForm from './create_new_form';

// Actions
import NotebooksActions from '../actions/notebooks_actions';

// Stores
import SessionStore from '../stores/session_store';

const Main = React.createClass({
  render() {
    return(
      <div className='main'>
        <Nav />
        <NotebookDrawer />
        <NotesIndex />
        <NoteForm />
        <CreateNewForm formFor='notebook' />
      </div>
    );
  }
});

module.exports = Main;
