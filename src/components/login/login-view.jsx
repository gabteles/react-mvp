import React, { PureComponent } from 'react';

class LoginView extends PureComponent {
  constructor(props) {
    super(props);

    this.presenter = props.presenter;
    this.presenter.setView(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = field => (event) => {
    const stateChange = {};
    stateChange[field] = event.target.value;
    return stateChange;
  };

  submitForm = (e) => {
    e.preventDefault();
    this.presenter.onLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
        <input type="submit" value="Login" />
      </form>
    );
  }
};

LoginView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default LoginView;
