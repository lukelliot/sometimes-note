// React
import React from 'react';

// Flux
import NotesActions from '../../actions/notes_actions';
import NotesStore from '../../stores/notes_store';

// Children
import NotesList from './notes_list';

const NotesIndex = React.createClass({
  componentWillMount() {
    NotesActions.fetchAllNotes();
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

  render() {
    return(
      <div className='notes-drawer-cmp'>
        <section className='notes-header'>
          <h2 className='notes-header-title'>NOTES</h2>
        </section>
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
});

module.exports = NotesIndex;
