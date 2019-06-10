import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './style.scss';

import App from './App.jsx';

class Welcome extends React.Component {
  render () {
    return (
      <div className="container">
        <Fragment>
          <h1>Hurray! your react app has started</h1>
          <p>Begin creating great thing</p>
        </Fragment>
        <App />
      </div>
    );
  }
}
// export default Welcome;
ReactDom.render(<Welcome />, document.getElementById('app'));
