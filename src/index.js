import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

class Welcome extends React.Component {
  render () {
    return (
      <Fragment>
        <h1>Hurray! your react app has started</h1>
        <p>Begin creating great thing</p>
      </Fragment>
    );
  }
}

ReactDom.render(<Welcome />, document.getElementById('app'));
