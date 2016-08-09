import React from 'react';
// import Nav from './nav';
import NotesIndex from './notes/notes_index';
import NoteForm from './notes/note_form';
import Nav from './nav';

module.exports = React.createClass({
  render() {
    return(
      <div className='main'>
        <Nav/>
        <NotesIndex />
        <NoteForm />
      </div>
    );
  }
});
