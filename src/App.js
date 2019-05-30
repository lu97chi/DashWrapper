import React, { Component } from 'react';
import { Router as MainRouter } from './router';
import { Router } from 'react-router-dom';
import { navigator } from 'rrsx';

class App extends Component {
  render() {
    return (
      <Router history={navigator}>
        <MainRouter />
      </Router>
    );
  }
}

export default App;
