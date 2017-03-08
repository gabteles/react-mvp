import React, { PureComponent } from 'react';
import { UIView } from 'ui-router-react';

import './layout.css';

class LayoutView extends PureComponent {
  render() {
    return (
      <main>
        <UIView />
      </main>
    );
  }
};

LayoutView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default LayoutView;
