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

export const addSearch = () => {
  return {
    type: types.ADD_SEARCH
  }
}

export const resetSearch = () => {
  return {
    type: types.RESET_SEARCH
  }
}