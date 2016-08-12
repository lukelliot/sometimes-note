// React
import React from 'react';

// Store
import ToggleStore from '../stores/toggle_store';

// Actions
import ToggleActions from '../actions/toggle_actions';
import NotebooksActions from '../actions/notebooks_actions';

const CreateNewForm = React.createClass({
  getInitialState() {
    return({
      toggle: '-closed',
      input: ''
    });
  },

  componentDidMount() {
    this.toggleListener = ToggleStore.addListener(this._onToggle);
  },

  componentWillUnmount() {
    this.toggleListener.remove();
  },

  _onToggle() {
    this.setState({
      toggle: ToggleStore.getToggle('createNewNotebookForm')
    });
  },

  _toggleCreateNewForm() {
    ToggleActions._toggleCreateNewNotebookForm();
  },

  _handleFormSubmit() {
    if (this.props.formFor === 'notebook' && this.state.input !== '') {
      NotebooksActions.createNotebook({ title: this.state.input });
    }
    this.setState({ input: '' });
    ToggleActions._toggleCreateNewNotebookForm();
  },

  _updateInput(e) {
    this.setState({ input: e.target.value });
  },

  render() {
    let formFor = this.props.formFor,
        verb = formFor === 'notebook' ? 'Title' : 'Name',
        img = formFor === 'notebook' ? Images.createNotebookIcon : Images.createTagIcon;

    return(
      <div className={ 'create-new-form-cmp' + this.state.toggle }>
        <div className='create-new-form-content'>
          <img className='create-new-icon' src={ img } height='35' width='40'/>
          <h1 className='create-new-form-title'>
            CREATE { formFor.toUpperCase() }
          </h1>
          <div className='create-new-divider' />
          <input type='text' placeholder={ verb + ' your ' + formFor } className='create-new-input' value={ this.state.input } onChange={ this._updateInput }/>
          <div className='create-new-form-buttons'>
            <button className='create-new-button create-new-cancel' onClick={ this._toggleCreateNewForm }>
              Cancel
            </button>
            <button className='create-new-button create-new-submit' onClick={ this._handleFormSubmit }>
              Create { formFor }
            </button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CreateNewForm;
