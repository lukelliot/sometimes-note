// React
import React from 'react';

const App = React.createClass({
  render() {
  return(
      <div className='spa'>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
