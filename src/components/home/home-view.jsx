import React, { PureComponent } from 'react';

class HomeView extends PureComponent {
  constructor(props) {
    super(props);
    props.presenter.setView(this);
  }

  render = () => (
    <div>
      Hello, this is HomeView!
    </div>
  );
};

HomeView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default HomeView;
