// React
import React from 'react';

// Vendor
import moment from 'moment';

// Actions
import NoteFormActions from '../../actions/note_form_actions';

// Stores
import NotesFormStore from '../../stores/note_form_store';

const NotesIndexItem = React.createClass({
  _setNoteForm() {
    let currentNote = NotesFormStore.getCurrentNoteForm(),
        indexNote = this.props.note;

    if (currentNote === undefined ||
        (currentNote.title !== indexNote.title &&
        currentNote.content !== indexNote.content)) {
      NoteFormActions.setCurrentNoteForm(this.props.note);
    }
  },

  render() {
    let note = this.props.note;
    return(
      <li className='notes-index-item' onClick={ this._setNoteForm }>
        <section className='note-item-info'>
          <div className='note-item-title'>
            <h3>
              { note.title }
            </h3>
          </div>
          <div className='note-item-created-at'>
            <h4>{ moment(note.created_at).fromNow() }</h4>
          </div>
          <div className='note-item-content'>
            { $(note.content).text().slice(0, 91) }
          </div>
        </section>
      </li>
    );
  }
});

module.exports = NotesIndexItem;
