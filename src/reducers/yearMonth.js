export const SET_YEARMONTH = 'SET_YEARMONTH'

export const initialState = {
  yearMonth: 0
}

export const yearMonthAction = yearMonth => {
  return (dispatch, getState) => {
    dispatch({ type: SET_YEARMONTH, payload: yearMonth })
  }
}

const yearMonthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_YEARMONTH:
      return {
        // ...state,
        yearMonth: action.payload,
      }
    default:
      return state
  }
}

export default yearMonthReducer

/* https://medium.com/how-to-react/how-to-use-redux-in-your-react-app-with-axios-2327f581bf8a */