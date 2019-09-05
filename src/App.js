import React from 'react';
import { Router } from 'react-router-dom';
import { navigator } from 'rrsx';
import { Router as MainRouter } from './router';


const App = () => (
  <Router history={navigator}>
    <MainRouter />
  </Router>
);

export default App;
