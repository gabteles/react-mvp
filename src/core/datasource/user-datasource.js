import { UserService } from '../service';
import { UserPersistence } from '../persistence';

class UserDatasource {
  static _instance;

  static async getInstance() {
    if (!UserDatasource._instance) {
      UserDatasource._instance = new UserDatasource();
    }

    return UserDatasource._instance;
  }

  async signIn(email, password) {
    const userPersistence = await UserPersistence.getInstance();
    const userService = await UserService.getInstance();

    const serviceResponse = await userService.signIn(email, password);

    if (serviceResponse.success) {
      await userPersistence.store(serviceResponse.data.user, password);
    } else if (serviceResponse.fatal) {
      return await this._locally_authenticate(userPersistence, email, password);
    }

    return {
      success: serviceResponse.success,
      fatal: serviceResponse.fatal,
      error: serviceResponse.error,
      data: null,
    };
  }

  async _locally_authenticate(userPersistence, email, password) {
    const authenticated = await userPersistence.authenticate(email, password);

    return {
      success: authenticated,
      fatal: !authenticated,
      data: null,
    };
  }
}

export default UserDatasource;
