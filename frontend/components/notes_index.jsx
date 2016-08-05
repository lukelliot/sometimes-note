import React
  from 'react';
import NotesActions
  from '../actions/notes_actions';
import NotesStore
  from '../stores/notes_store';
import NotesIndexItem
  from './notes_index_item';
import ErrorStore
  from '../stores/error_store';
import ErrorActions
  from '../actions/error_actions';

module.exports = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return({
      notes: NotesStore.all()
    });
  },

  componentDidMount() {
    this.notesListener = NotesStore.addListener(this._onNotesChange);
  },

  componentWillUnMount() {
    this.notesListener.remove();
  },

  _onNotesChange() {
    this.setState({
      notes: NotesStore.all()
    });
  },

  _createNotesIndexItems() {
    return this.state.notes.map( note => {
      return(
        <NotesIndexItem note={note} key={note.id} />
      );
    });
  },

  _countNotes() {
    const notesCount = this.state.notes.length;
    const countText =
      notesCount === 1 ? 'note' : 'notes';

    return(
      <p className='notes-count'>
        {notesCount} {countText}
      </p>
    );
  },

  render() {
    return(
      <div className='notes-drawer-cmp'>
        <section className='notes-header'>
          <h2 className='notes-header-title'>Notes</h2>
        </section>
        <section className='notes-body'>
          <div className='notes-info'>
            { this._countNotes() }
            <div className='notes-view-sort-dropbown'></div>
            <ul className='notes-list'>
              { this._createNotesIndexItems() }
            </ul>
          </div>
        </section>
      </div>
    );
  }
});
