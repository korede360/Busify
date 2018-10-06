import { AsyncStorage } from 'react-native';

const trips = API_URL => ({
  async getUserTrips(passengerId, token) {
    try {
      const response = await fetch(`${API_URL}/passengers/${passengerId}/trips`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      return response.json();
    } catch (e) {
      alert(e);
    }
  },
  async joinTrip(tripId, passengerId, token) {
    try {
      const response = await fetch(`${API_URL}/passengers/trips/join-trip/${tripId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          passengerId
        })
      });
    } catch (e) {
      alert(e);
    }
  },
  async getCurrentTrip(passengerId, token) {
    try {
      const response = await fetch(`${API_URL}/passengers/trips/current-trip?passengerId=${passengerId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json());
    } catch (e) {
      alert(e);
    }
  }
});

export default trips;