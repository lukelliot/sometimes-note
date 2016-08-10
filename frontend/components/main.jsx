import React from 'react';
import Nav from './nav';
import NotebookDrawer from './notebooks/notebooks_index';
import NotesIndex from './notes/notes_index';
import NoteForm from './notes/note_form';

module.exports = React.createClass({
  render() {
    return(
      <div className='main'>
        <Nav />
        <NotebookDrawer />
        <NotesIndex />
        <NoteForm />
      </div>
    );
  }
});
