class LoginPresenter {
  setView(view) {
    console.log("Setting view in LoginPresenter: ", view);
    this.view = view;
  };

  onLogin(email, password) {
    // Access datasource to login
  }
}

export default LoginPresenter;
