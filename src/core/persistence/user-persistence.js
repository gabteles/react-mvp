/*global emit*/
import PouchDB from 'pouchdb';
import PouchDBUpsert from 'pouchdb-upsert';
import sha512 from 'sha512';

class UserPersistence {

  static _instance;

  static async getInstance() {
    if (!UserPersistence._instance) {
      UserPersistence._instance = new UserPersistence();
      await UserPersistence._instance.tearUp();
    }

    return UserPersistence._instance;
  }

  constructor(props) {
    PouchDB.plugin(PouchDBUpsert);
    this.db = new PouchDB('users');
  }

  async tearUp() {
    const queries = {
      _id: '_design/users',
      views: {
        authentication: {
          map: function(user) { emit([ user.email, user.password ]) }.toString()
        }
      }
    };

    try {
      await this.db.put(queries);
    } catch (e) {
      // TODO: Maybe handle errors here
    }
  }

  async store(user, password) {
    const dbUser = {
      _id: user.id.toString(),
      email: user.email,
      password: sha512(password).toString('hex'),
    };

    try {
      await this.db.upsert(dbUser._id, () => dbUser);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async authenticate(email, password) {
    try {
      const hexPassword = sha512(password).toString('hex');
      const result = await this.db.query('users/authentication', { key: [email, hexPassword] });
      return (result.total_rows === 1);
    } catch (e) {
      // TODO: Maybe handle errors here
      console.error(e);
      return false;
    }
  }
}

export default UserPersistence;
