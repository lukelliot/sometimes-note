// React
import React from 'react';

// Flux
import NotebooksActions from '../../actions/notebooks_actions';
import NotebooksStore from '../../stores/notebooks_store';
import ToggleStore from '../../stores/toggle_store';

// Children
import NotebookIndexItem from './notebook_index_item';

module.exports = React.createClass({
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
      toggle: ToggleStore._getToggle('notebooksIndex')
    });
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
            <button className='new-notebook-button'>New Notebook</button>
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
