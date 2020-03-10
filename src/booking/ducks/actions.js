import types from './types'

export const bookRide = (trip) => {
  return {
    type: types.BOOK_RIDE,
    payload: trip
  }
}

export const resetBooked = () => {
  return {
    type: types.RESET_BOOKED
  }
}

export const addDriver = (driver) => {
  return {
    type: types.ADD_DRIVER,
    payload: driver
  }
}

export const setTime = (value) => {
  return {
    type: types.SET_TIME,
    payload: value
  }
}

export const selectDay = (value) => {
  return {
    type: types.SELECT_DAY,
    payload: value
  }
}
