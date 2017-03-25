import BaseService from './base-service';

class UserService extends BaseService {
  static _instance;

  static async getInstance() {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }

    return UserService._instance;
  }

  async signIn(email, password) {
    const response = await this.post('/users/sign_in.json', { user: { email, password } });

    if (response.success) {
      return { success: true, fatal: false, data: response.data };
    } else if (response.fatal) {
      return { success: false, fatal: true };
    } else {
      return { success: false, fatal: false, error: response.data.error };
    }
  }
}

export default UserService;
