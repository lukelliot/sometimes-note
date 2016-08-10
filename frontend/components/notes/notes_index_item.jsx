import React from 'react';
import moment from 'moment';
import NoteFormActions from '../../actions/note_form_actions';
import NotesFormStore from '../../stores/note_form_store';

module.exports = React.createClass({
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
            { note.content }
          </div>
        </section>
      </li>
    );
  }
});
