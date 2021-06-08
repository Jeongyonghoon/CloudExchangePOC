import Immutable from 'immutable'
export const SET_USER_KEY = 'SET_USER_KEY'
const axios = require('axios')

export const initialState = Immutable.fromJS({
  memberId: 0,
})

export const userKeyAction = memberId => {
  return function (dispatch, getState) {
    dispatch({ type: SET_USER_KEY, payload: memberId })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_KEY:
      return {
        memberId: action.payload,
      }
    default:
      return state
  }
}
export default reducer
