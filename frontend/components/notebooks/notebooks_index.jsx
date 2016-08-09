// React
import React from 'react';

// Flux
import NotebooksActions from '../../actions/notebooks_actions';
import NotebooksStore from '../../stores/notebooks_store';

// Children
import NotebookIndexItem from './notebook_index_item';

module.exports = React.createClass({
  componentWillMount() {
    NotebooksActions.fetchAllNotebooks();
  },

  getInitialState() {
    return({
      notebooks: NotebooksStore.all()
    });
  },

  componentDidMount() {
    this.notebooksListener = NotebooksStore.addListener(this._onNotebooksChange);
  },

  componentWillUnMount() {
    this.notebooksListener.remove();
  },

  _onNotebooksChange() {
    this.setState({
      notebooks: NotebooksStore.all()
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
      <div className='notebooks-drawer-cmp'>
        <section className='notebooks-header'>
          <h2 className='notebooks-header-title'>Notebooks</h2>
        </section>
        <section className='notebooks-body'>
          <div className='notebooks-search'>
            Placeholder for Search bar
          </div>
          <ul>
          { this._createNotebookIndexItems() }
          </ul>
        </section>
      </div>
    );
  }
});
