import React, { PureComponent } from 'react';
import { UIView } from 'ui-router-react';

class LayoutView extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props)
    props.presenter.setView(this);
  }

  render = () => (
    <article>
      <aside>
        aside
      </aside>
      <main>
        <UIView />
      </main>
    </article>
  );
};

LayoutView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default LayoutView;
