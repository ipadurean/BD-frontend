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

export const addDriverTrips = (driver) => {
  return {
    type: types.ADD_DRIVER_TRIPS,
    payload: driver.trips
  }
}