import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Button, Form, Message, Container } from 'semantic-ui-react'

import * as assets from './assets';

import './login.css';

class LoginView extends PureComponent {
  constructor(props) {
    super(props);

    this.presenter = props.presenter;
    this.presenter.setView(this);

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null,
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
    this.setState({ loading: true });
    setTimeout(() => alert("Aqui ocorre redirecionamento para próxima página."), 3000);
  }

  showLoginFatalError() {
    this.setState({ error: "Não foi possível realizar o login. (Erro fatal)" });
  }

  showLoginError(message) {
    this.setState({ error: message });
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

  render() {
    return (
      <div className="layout-full-height grid-container" id="login">
        <Row className="layout-full-height" middle="xs">
          <Col xs={12}>
            <Container textAlign='center'>
              <img src={assets.logo} alt="PDVend" />
            </Container>
            <Row center="xs">
              <Col xs={12} lg={4}>
                <Container className="panel" textAlign="left">
                  <Form onSubmit={this.submitForm} loading={this.state.loading} error={!!this.state.error}>
                    <Form.Input
                      label='Email'
                      placeholder='Digite seu email'
                      onChange={this.handleChange('email')}
                      value={this.state.email}
                      type="email"
                    />
                    <Form.Input
                      label='Senha'
                      placeholder='Digite sua senha'
                      onChange={this.handleChange('password')}
                      value={this.state.password}
                      type="password"
                    />

                    <Container textAlign="center">
                      <Message error content={this.state.error} />
                      <Button inverted color='green'>Login</Button>
                    </Container>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
};

LoginView.propTypes = {
  presenter: React.PropTypes.shape({
    setView: React.PropTypes.func,
  }),
};

export default LoginView;
