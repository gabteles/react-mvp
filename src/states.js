import { ConnectComponent, requireStates } from './util';

import * as Layout from './core/layout';

const initialStates = [
  {
    name: 'app',
    abstract: true,
    component: ConnectComponent(Layout.View, Layout.Presenter),
  },
];

const context = require.context('./components/', true, /index\.js$/);
const States = requireStates(context, initialStates);

export default States;
