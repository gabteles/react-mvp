import React from 'react';
import ReactDOM from 'react-dom';

import { UIRouter, UIView, pushStateLocationPlugin } from 'ui-router-react';

import { BaseService } from './core/service';
import { BasePersistence } from './core/persistence';

import states from './states';

import 'semantic-ui-css/semantic.css';
import './index.css';

BaseService.config({
  baseUrl: 'http://0.0.0.0:3000',
});

BasePersistence.config();

const plugins = [
  pushStateLocationPlugin
];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);
