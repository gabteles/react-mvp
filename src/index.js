import React from 'react';
import ReactDOM from 'react-dom';

import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';

import states from './states';

import './index.css';

const plugins = [
  pushStateLocationPlugin
];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);
