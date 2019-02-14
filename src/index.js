import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './style.scss';

class Welcome extends React.Component {
  render () {
    return (
      <div className="container">
        <Fragment>
          <h1>Hurray! your react app has started</h1>
          <p>Begin creating great thing</p>
        </Fragment>
      </div>
    );
  }
}

ReactDom.render(<Welcome />, document.getElementById('app'));
