import View from './login-view';
import Presenter from './login-presenter';
import { ConnectComponent } from '../../util';

const states = [
  {
    name: 'app.login',
    url: '/login',
    component: ConnectComponent(View, Presenter),
  },
];

export default states;
