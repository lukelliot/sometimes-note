// React
import React from 'react';

// Stores
import NoteFormStore from '../../stores/note_form_store';
import SessionStore from '../../stores/session_store';

// Actions
import NotesActions from '../../actions/notes_actions';

// Children
import NotebooksDropdown from '../notebooks/notebooks_dropdown';

// Vendor
import Quill from 'react-quill';

const NoteForm = React.createClass({
  getInitialState() {
    return({
      id: undefined,
      title: '',
      content: ''
    });
  },

  _focus() {
    this.refs.editor.focus();
  },

  componentDidMount() {
    this.formListener = NoteFormStore.addListener(this._onFormChange);
  },

  componentWillUnmount() {
    this.formListener.remove();
  },

  _formatNoteForSave() {
    let noteToSave = {
      title: this.state.title,
      content: this.state.content
    };

    if (this.state.id) {
      noteToSave.id = this.state.id;
    }
    return noteToSave;
  },

  _onFormChange() {
    if (this.state.title !== '') {
      if (this.state.id) {
        NotesActions.saveNote(this._formatNoteForSave());
      } else {
        NotesActions.createNote(this._formatNoteForSave());
      }
    }

    let note = NoteFormStore.getCurrentNoteForm();
    if (note) {
      this.setState({
        id: note.id,
        title: note.title,
        content: note.content
      });
    } else {
      this.setState({
        id: undefined,
        title: '',
        content: ''
      });
    }
  },

  _onContentChange(content) {
    this.setState({ content });
  },

  _setTitle(e) {
    this.setState({ title: e.target.value });
  },

  render() {
    return(
      <div className='note-form-cmp'>
        <input className='title-input'
          value={ this.state.title }
          type='text'
          placeholder='Title your note'
          onChange={ this._setTitle }
        />
        <div className='form-options'>
          <NotebooksDropdown currentNoteFormId={ this.state.id } />
          <button className='note-form-save-button'>Save Note</button>
        </div>
        <section className='edit-input' onClick={ this._focus }>
          <Quill className='editor'
            theme='snow'
            value={ this.state.content }
            placeholder='Make a new note...'
            onChange={ this._onContentChange }
            ref='editor'
          />
        </section>
      </div>
    );
  }
});
 module.exports = NoteForm;
