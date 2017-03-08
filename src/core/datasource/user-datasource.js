import { UserService } from '../service';

class UserDatasource {
  contructor() {
    throw new Error('Cannot instantiate singleton');
  }

  static signIn(email, password) {
    return UserService.signIn(email, password);
  }
}

export default UserDatasource;
