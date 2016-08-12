import React from 'react';
import NotesIndexItem from './notes_index_item';

const NotesList = React.createClass({
  _createNotesIndexItems() {
    return this.props.notes.map( note => {
      return(
        <NotesIndexItem note={ note } key={ note.id } />
      );
    });
  },

  _countNotes() {
    const notesCount = this.props.notes.length;
    const countText =
      notesCount === 1 ? 'note' : 'notes';

    return(
      <p className='notes-count'>
        { notesCount } { countText }
      </p>
    );
  },

  render() {
    return(
      <section className='notes-body'>
        <div className='notes-info'>
          { this._countNotes() }
          <div className='notes-view-sort-dropbown'></div>
        </div>
        <div className='form-divider'/>
          <ul className='notes-list'>
            { this._createNotesIndexItems() }
          </ul>
      </section>
    );
  }
});

module.exports = NotesList;
