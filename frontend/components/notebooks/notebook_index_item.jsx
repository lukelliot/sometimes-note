import React from 'react';
import moment from 'moment';
import NotebooksActions from '../../actions/notebooks_actions';

module.exports = React.createClass({
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
            <button className='delete-button' onClick={ this._handleDelete }>Delete</button>
          </div>
          { this._countNotes() }
        </div>
      </li>
    );
  }
});
