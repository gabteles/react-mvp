import { UserDatasource } from '../../core/datasource';

class LoginPresenter {
  setView(view) {
    this.view = view;
  };

  async onLogin(email, password) {
    this.view.showProgress();
    const userDatasource = await UserDatasource.getInstance();
    const response = await userDatasource.signIn(email, password);
    this.view.hideProgress();

    if (response.success) {
      this.view.showLoginSuccess();
    } else if (response.fatal) {
      this.view.showLoginFatalError();
    } else {
      this.view.showLoginError(response.error);
    }
  }
}

export default LoginPresenter;
