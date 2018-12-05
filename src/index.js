import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
