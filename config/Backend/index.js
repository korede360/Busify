import auth from './auth';
import trips from './trips';
const API_URL = 'http://localhost:3500';
export default class Backend {
  static auth = auth(API_URL);
  static trips = auth(API_URL);
}
