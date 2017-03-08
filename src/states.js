import { requireStates } from './util';

import * as Layout from './core/view/layout';

const initialStates = [
  {
    name: 'app',
    abstract: true,
    component: Layout.View,
  },
];

const context = require.context('./components/', true, /index\.js$/);
const States = requireStates(context, initialStates);

export default States;
