import React, { Component } from 'react';
import { Router as MainRouter } from './router';
import { Router } from 'react-router-dom';
import { NotFound, navigator } from './lib/router';
import Page404 from './components/404';

NotFound.set(Page404);

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
