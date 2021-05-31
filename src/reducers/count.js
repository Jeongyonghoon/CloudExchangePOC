const axios = require('axios')

export const initialState = {
  userList: [],
  key:0,
} // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.


export const GET_USER_LIST = 'GET_USER_LIST'
export const SET_USER_KEY = 'SET_USER_KEY'

export const userListAction = () => {
  return async function (dispatch, getState) {
    const result = await axios.get(`http://localhost:8000/UserList`)
    dispatch({type:GET_USER_LIST, payload:result.data})
  }
}

export const userKeyAction = state => {
  if(0==0){
    return{
      type:SET_USER_KEY,
      payload:1,
    }
  }
  else{
    return{
      type:SET_USER_KEY,
      payload:0,
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      }
    case SET_USER_KEY:
      return {
        ...state,
        key: action.payload,
      }
    default:
      return state
  }
}

export default reducer

/* https://medium.com/how-to-react/how-to-use-redux-in-your-react-app-with-axios-2327f581bf8a */