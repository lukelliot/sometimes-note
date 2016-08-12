import React from 'react';
import moment from 'moment';
import NotebooksActions from '../../actions/notebooks_actions';

const NotebooksIndexItem = React.createClass({
  _countNotes() {
    let numNotes = this.props.notebook.numNotes;
    let notesText = numNotes === 1 ? 'note' : 'notes';
    return(
      <div className='notebook-item-note-count'>
        { numNotes } { notesText }
      </div>
    );
  },

  _handleDelete(e) {
    e.preventDefault();
    NotebooksActions.removeNotebook(this.props.notebook.id);
  },

  render() {
    let notebook = this.props.notebook;
    return(
      <li className='notebook-item-cmp'>
        <div className='notebook-item-content'>
          <div className='notebook-item-title'>
            { notebook.title }
            <img className='notebook-list-delete-button' src={ Images.trashcanIconWhite } onClick={ this._handleDelete } height='24' width='24' />
          </div>
          { this._countNotes() }
        </div>
      </li>
    );
  }
});

module.exports = NotebooksIndexItem;
