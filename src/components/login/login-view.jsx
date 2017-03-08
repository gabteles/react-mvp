import React, { PureComponent } from 'react';

class LoginView extends PureComponent {
  constructor(props) {
    super(props);

    this.presenter = props.presenter;
    this.presenter.setView(this);

    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  //===== PRESENTER ACTIONS

  showProgress() {
    this.setState({ loading: true });
  }

  hideProgress() {
    this.setState({ loading: false });
  }

  showLoginSuccess() {
    alert("Login com sucesso!");
  }

  showLoginFatalError() {
    alert("Não foi possível realizar o login. (Erro fatal)")
  }

  showLoginError(message) {
    alert(message);
  }

  //===== VIEW MANAGEMENT

  handleChange = field => (event) => {
    const stateChange = {};
    stateChange[field] = event.target.value;
    this.setState(stateChange);
  };

  submitForm = (e) => {
    e.preventDefault();
    this.presenter.onLogin(this.state.email, this.state.password);
  };

  loginFragment() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
        <input type="submit" value="Login" />
      </form>
    );
  }

  progressFragment() {
    return (
      <p>Carregando...</p>
    );
  }

  render() {
    return this.state.loading ? this.progressFragment() : this.loginFragment();
  }
};

LoginView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default LoginView;
