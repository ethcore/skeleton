// @flow
import React, { Component } from 'react';

/** Stylesheets **/
import './App.css';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
