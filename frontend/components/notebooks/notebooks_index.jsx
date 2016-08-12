// React
import React from 'react';

// Stores
import NotebooksStore from '../../stores/notebooks_store';
import ToggleStore from '../../stores/toggle_store';

// Actions
import NotebooksActions from '../../actions/notebooks_actions';
import ToggleActions from '../../actions/toggle_actions';

// Children
import NotebookIndexItem from './notebook_index_item';

const NotebooksIndex = React.createClass({
  componentWillMount() {
    NotebooksActions.fetchAllNotebooks();
  },

  getInitialState() {
    return({
      notebooks: NotebooksStore.all(),
      toggle: '-closed'
    });
  },

  componentDidMount() {
    this.notebooksListener = NotebooksStore.addListener(this._onNotebooksChange);
    this.toggleListener = ToggleStore.addListener(this._onToggle);
  },

  componentWillUnMount() {
    this.notebooksListener.remove();
    this.toggleListener.remove();
  },

  _onNotebooksChange() {
    this.setState({
      notebooks: NotebooksStore.all()
    });
  },

  _onToggle() {
    this.setState({
      toggle: ToggleStore.getToggle('notebooksIndex')
    });
  },

  _createNewNotebook() {
    ToggleActions._toggleCreateNewNotebookForm();
  },

  _createNotebookIndexItems() {
    return this.state.notebooks.map( notebook => {
      return(
        <NotebookIndexItem notebook={notebook} key={notebook.id} />
      );
    });
  },

  render() {
    return(
      <div className={ 'notebooks-drawer-cmp' + this.state.toggle }>
        <section className='notebooks-header'>
          <div className='notebooks-header-container'>
            <h2 className='notebooks-header-title'>NOTEBOOKS</h2>
            <img className='new-notebook-button' src={ Images.createNotebookIconPlus } onClick={ this._createNewNotebook } height='24' width='24' />
          </div>
          <input className='notebooks-searchbar' type='text' placeholder='Find a notebook' />
        </section>
        <section className='notebooks-body'>
          <ul className='notebooks-list'>
          { this._createNotebookIndexItems() }
          </ul>
        </section>
      </div>
    );
  }
});

module.exports = NotebooksIndex;
