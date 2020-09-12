import types from './types'


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
    type: types.DATE_CLICKED
  }
}

export const startClicked = () => {
  return {
    type: types.START_CLICKED
  }
}

export const endClicked = () => {
  return {
    type: types.END_CLICKED
  }
}

export const clickSearch = () => {
  return {
    type: types.CLICK_SEARCH
  }
}

export const resetSearch = () => {
  return {
    type: types.RESET_SEARCH
  }
}

export const sortDrivers = (sortType) => {
  return {
    type: types.SORT_DRIVERS,
    payload: sortType
  }
}

export const cancelClicks = () => {
  return {
    type: types.CANCEL_CLICKS
  }
}

export const showQuarters = (value) => {
  return {
    type: types.SHOW_QUARTERS,
    payload: value
  }
}

export const hideQuarters = () => {
  return {
    type: types.HIDE_QUARTERS
  }
}