import View from './home-view';
import Presenter from './home-presenter';
import { ConnectComponent } from '../../util';

const states = [
  {
    name: 'app.home',
    url: '/home',
    component: ConnectComponent(View, Presenter),
  },
];

export default states;
