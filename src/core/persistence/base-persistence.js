import PouchDB from 'pouchdb';
import PouchDBUpsert from 'pouchdb-upsert';

class BasePersistence {
  static config() {
    PouchDB.plugin(PouchDBUpsert);
  }
}

export default BasePersistence;
