import React
  from 'react';

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h1>App</h1>
        { this.props.children }
      </div>
    );
  }
});
