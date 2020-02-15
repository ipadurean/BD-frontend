import types from './types'

export const addTrips = (trips) => {
  return {
    type: types.ADD_TRIPS,
    payload: trips
  }
}

export const selectDate = (date) => {
  return {
    type: types.ADD_DATE,
    payload: date
  }
}

export const startTime = (time) => {
  return {
    type: types.ADD_START,
    payload: time
  }
}

export const endTime = (time) => {
  return {
    type: types.ADD_END,
    payload: time
  }
}

export const dateClicked = () => {
  return {
    type: types.ADD_CLICKED
  }
}

export const filterDrivers = (drivers) => {
  return {
    type: types.FILTER_DRIVERS,
    payload: drivers
  }
}

export const resetSearch = () => {
  return {
    type: types.RESET_SEARCH
  }
}