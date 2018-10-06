import { AsyncStorage } from 'react-native';

const auth = API_URL => ({
  async logIn(email, password) {
    return fetch(`${API_URL}/passengers/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => response.json());
  },
  async signUp(firstName, lastName, email, password, confirmPassword) {
    try {
      const response = await fetch(`${API_URL}/passengers/auth/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword
        })
      });
      return response.json();
    } catch (e) {
      alert(e);
    }
  },
  async logOut() {
    await AsyncStorage.removeItem('@Busify:token');
    await AsyncStorage.removeItem('@Busify:user');
  },
  async getCurrentUserAndToken() {
    const user = await JSON.parse(AsyncStorage.getItem('@Busify:user'));
    const token = await AsyncStorage.getItem('@Busify:token');
    return {
      user,
      token
    };
  }
});

export default auth;
