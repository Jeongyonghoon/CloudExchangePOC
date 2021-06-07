export const GET_USER_LIST = 'GET_USER_LIST'
export const SET_USER_KEY = 'SET_USER_KEY'
const axios = require('axios')

export const initialState = {
  userList: [],
  memberId: 0,
}

export const userListAction = () => {
  return async (dispatch, getState) => {
    try{
      const result = await axios.get(`/cloud/users`)
      console.log(result.data)
      dispatch({ type: GET_USER_LIST, payload: result.data })
    } catch(e) {
      console.log(e)
    }
  }
}

export const userKeyAction = urlKey => {
  return function (dispatch, getState) {
    dispatch({ type: SET_USER_KEY, payload: urlKey })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        userList: action.payload,
      }
    case SET_USER_KEY:
      return {
        urlKey: action.payload,
      }
    default:
      return state
  }
}

export default reducer

/* https://medium.com/how-to-react/how-to-use-redux-in-your-react-app-with-axios-2327f581bf8a */