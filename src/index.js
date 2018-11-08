import React  from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoot from './AppRoot/AppRoot.js';


ReactDOM.render(
  <Router>
    <AppRoot />
  </ Router>, 
  document.getElementById('root')
);