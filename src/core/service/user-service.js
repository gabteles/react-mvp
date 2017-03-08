import BaseService from './base-service';

class UserService extends BaseService {
  static async signIn(email, password) {
    const response = await this.post('/users/sign_in.json', { user: { email, password } });

    if (response.success) {
      return { success: true, fatalError: false };
    } else if (response.fatal) {
      return { success: false, fatalError: true };
    } else {
      return { success: false, fatalError: false, error: response.data.error };
    }
  }
}

export default UserService;
