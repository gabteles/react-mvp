import { ConnectComponent } from './util';

import * as Layout from './core/layout';
import * as Home from './components/home';


export default [
  {
    name: 'app',
    abstract: true,
    component: ConnectComponent(Layout.View, Layout.Presenter),
  },
  {
    name: 'app.home',
    url: '/home',
    component: ConnectComponent(Home.View, Home.Presenter),
  }
];
