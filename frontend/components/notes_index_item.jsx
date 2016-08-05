import React
  from 'react';

module.exports = React.createClass({
  render() {
    return(
      <li className='notes-index-item'>
        <section className='note-item-info'>
          <div className='note-item-title'>
            { this.props.note.title }
          </div>
          <div className='note-item-created-at'>
            
          </div>
        </section>
      </li>
    );
  }
});
