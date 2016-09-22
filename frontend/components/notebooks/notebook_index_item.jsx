// React
import React from 'react';

// Vendor
import moment from 'moment';

// Stores
import NotesStore from '../../stores/notes_store';

// Actions
import NotebooksActions from '../../actions/notebooks_actions';

const NotebooksIndexItem = React.createClass({
  getInitialState() {
    return({
      numNotes: NotesStore.countNotesByNotebook(this.props.notebook.id)
    });
  },

  _countNotes() {
    let notesText = this.state.numNotes === 1 ? 'note' : 'notes';
    return(
      <div className='notebook-item-note-count'>
        { this.state.numNotes } { notesText }
      </div>
    );
  },

  componentDidMount() {
    this.notesListener = NotesStore.addListener(this._onNotesChange);
  },

  componentWillUnmount() {
    this.notesListener.remove();
  },

  _handleDelete(e) {
    e.preventDefault();
    NotebooksActions.removeNotebook(this.props.notebook.id);
  },

  _onNotesChange() {
    this.setState({
      numNotes: NotesStore.countNotesByNotebook(this.props.notebook.id)
    });
  },

  render() {
    let notebook = this.props.notebook;
    return(
      <li className='notebook-item-cmp'>
        <div className='notebook-item-content'>
          <div className='notebook-item-title'>
            { notebook.title }
            <img
              className='notebook-list-delete-button'
              src={ Images.trashcanIconWhite }
              onClick={ this._handleDelete }
              height='24'
              width='24'
            />
          </div>
          { this._countNotes() }
        </div>
      </li>
    );
  }
});

module.exports = NotebooksIndexItem;
