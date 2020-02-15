import types from './types';

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    payload: {
      id: user.id,
      username: user.username,
      trips: user.trips
    }
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT
  }
}

export const deleteTrip = () => {
  return {
    type: types.DELETE_TRIP
  }
}

