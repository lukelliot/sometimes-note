import React from 'react';
// import NotesIndex from './components/notes/notes_index';
// import { Link } from 'react-router';

module.exports = React.createClass({
  render() {
    return(
      <div className='nav'>
        <button>New Note</button>
        <button>Notes</button>
        <button>Notebooks</button>
        <button>Profile</button>
      </div>
    );
  }
});
