import types from './types.js';

export const loadingDrivers = () => {
  return {
    type: types.LOADING_DRIVERS
  }
}

export const addDrivers = (drivers) => {
  return {
    type: types.ADD_DRIVERS,
    payload: drivers
  }
}

