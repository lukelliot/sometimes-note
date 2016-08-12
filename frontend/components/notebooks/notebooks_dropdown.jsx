// React
import React from 'react';

// Stores
import NotebooksStore from '../../stores/notebooks_store';
import ToggleStore from '../../stores/toggle_store';

// Actions
import NotebooksActions from '../../actions/notebooks_actions';
import ToggleActions from '../../actions/toggle_actions';

const NotebooksDropdown = React.createClass({
  getInitialState() {
    return({
      notebooks: NotebooksStore.all(),
      toggleDropdown: '-closed',
      toggleCreateNewNotebookForm: '-closed',
      currentNotebook: NotebooksStore.getCurrentNotebook()
    });
  },

  componentDidMount() {
    this.notebooksListener = NotebooksStore.addListener(this._onNotebooksChange);
    this.toggleListener = ToggleStore.addListener(this._onToggle);
  },

  componentWillUnmount() {
    this.notebooksListener.remove();
    this.toggleListener.remove();
  },

  _onNotebooksChange() {
    this.setState({
      notebooks: NotebooksStore.all(),
      currentNotebook: NotebooksStore.getCurrentNotebook()
    });
  },

  _onToggle() {
    this.setState({
      toggleDropdown: ToggleStore.getToggle('notebooksDropdown'),
      toggleCreateNewNotebookForm: ToggleStore.getToggle('createNewNotebookForm')
    });
  },

  _toggleDropdown(e) {
    e.preventDefault();
    ToggleActions._toggleNotebooksDropdown();
  },

  _toggleCreateNewNotebookForm() {
    ToggleActions._toggleCreateNewNotebookForm();
  },

  _changeCurrentNotebook(notebook) {
    NotebooksActions.setCurrentNotebook(notebook);
  },

  _createNotebooksList() {
    return this.state.notebooks.map( notebook => {
      if (notebook.id === this.state.currentNotebook.id) {
        return(
          <li className='current-notebook notebook-dropdown-list-item' key={ notebook.id }>
            { notebook.title }
          </li>
        );
      } else {
        return(
          <li className='notebook-dropdown-list-item' key={ notebook.id } onClick={ this._changeCurrentNotebook.bind(null, notebook) }>
            { notebook.title }
          </li>
        );
      }
    });
  },

  render() {
    let title;
    if (this.state.currentNotebook) {
      title = this.state.currentNotebook.title;
    }

    return(
      <div className='notebooks-dropdown-cmp'>
        <button className='current-notebook-title' onClick={ this._toggleDropdown }>
          <img className='dropdown-icon' src={ Images.notebookDropdownIcon } height='12' width='12' />
          { title }
        </button>
        <div className={ 'notebooks-dropdown' + this.state.toggleDropdown }>
          <input type='text' placeholder='This search bar doesnt work yet :-/' className='notebooks-dropdown-search'/>
          <ul className='notebooks-drop-list'>
            <li className='notebook-dropdown-create-button' onClick={ this._toggleCreateNewNotebookForm }>
              Create New Notebook
            </li>
            { this._createNotebooksList() }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NotebooksDropdown;
