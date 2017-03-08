import React from 'react';

const ConnectComponent = (view, presenter) => React.createClass({
  displayName: `ConnectComponent(${view.name}, ${presenter.name})`,
  render: function () {
    const _presenter = new presenter();
    return React.createElement(view, { ...this.props, presenter: _presenter })
  },
});

export default ConnectComponent;
