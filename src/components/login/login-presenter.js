import { UserDatasource } from '../../core/datasource';

class LoginPresenter {
  setView(view) {
    console.log("Setting view in LoginPresenter: ", view);
    this.view = view;
  };

  async onLogin(email, password) {
    this.view.showProgress();
    const response = await UserDatasource.signIn(email, password);
    this.view.hideProgress();

    if (response.success) {
      this.view.showLoginSuccess();
    } else if (response.fatalError) {
      this.view.showLoginFatalError();
    } else {
      this.view.showLoginError(response.error);
    }
  }
}

export default LoginPresenter;