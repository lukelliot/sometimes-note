import React from 'react';

module.exports = React.createClass({
  render() {
  return(
      <div className='spa'>
        { this.props.children }
      </div>
    );
  }
});
