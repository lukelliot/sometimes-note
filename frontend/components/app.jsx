import React
  from 'react';
import TimeAgo
  from 'react-timeago';

module.exports = React.createClass({
  render() {
  //   let time = moment().format('m');
    return(
      <div>
        <TimeAgo date='Aug 4, 2016' />
        { this.props.children }
      </div>
    );
  }
});
