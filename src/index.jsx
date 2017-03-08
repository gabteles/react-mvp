import React from 'react';
import ReactDOM from 'react-dom';

import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';

import BaseService from './core/service/base-service';

import states from './states';

import './index.css';

BaseService.config({
  baseUrl: 'http://0.0.0.0:3000',
});

const plugins = [
  pushStateLocationPlugin
];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);
