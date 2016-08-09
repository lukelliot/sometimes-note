import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

module.exports = React.createClass({
  getInitialState() {
    return({
      title: '',
      editorState: EditorState.createEmpty()
    });
  },

  _focus() {
    this.refs.editor.focus();
  },

  _onChange(editorState) {
    this.setState({ editorState });
  },

  _handleStyleClick(style) {
    this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  },

  _handleCodeClick() {
    this._onChange(RichUtils.toggleCode(this.state.editorState));
  },

  _setTitle(e) {
    this.setState({ title: e.target.value });
  },

  render() {
    return(
      <div className='note-form-cmp'>
        <div className='form-buttons'>
          <button onClick={() => this._handleStyleClick('BOLD')}>B</button>
          <button onClick={() => this._handleStyleClick('ITALIC')}>I</button>
          <button onClick={() => this._handleStyleClick('UNDERLINE')}>U</button>
          <button onClick={() => this._handleCodeClick()}>Code</button>
        </div>
        <div className='form-divider'></div>
        <input className='title-input' type='text' placeholder='Title your note' onChange={this._setTitle} />
        <section className='edit-input' onClick={this._focus}>
          <Editor
            editorState={ this.state.editorState }
            onChange={ this._onChange }
            placeholder='Just start typing...'
            ref='editor'
          />
        </section>
      </div>
    );
  }
});
