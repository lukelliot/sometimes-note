import React from 'react';
import moment from 'moment';

module.exports = React.createClass({
  render() {
    let note = this.props.note;
    return(
      <li className='notes-index-item'>
        <section className='note-item-info'>
          <div className='note-item-title'>
            <h3>
              { note.title }
            </h3>
          </div>
          <div className='note-item-created-at'>
            <h4>{ moment(note.created_at).fromNow() }</h4>
          </div>
          <div className='note-item-content'>
            { note.content }
          </div>
        </section>
      </li>
    );
  }
});
