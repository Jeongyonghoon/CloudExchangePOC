const axios = require('axios')

export const initialState = {
  number: 0,
  data: 'HIHI',
  userList: [],
} // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const COUNT_PLUS = 'COUNT_PLUS' // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS = 'COUNT_MINUS' // count 1을 감소시킬 액션 타입이다.

export const initialUserList = []
export const GET_USER_LIST = 'GET_USER_LIST'
export const CHANGE_KEY = 'CHANGE_KEY'

const getUserList = async () => {
  const userList = await axios.get('http://localhost:8000/UserList')
  return {
    number: 11,
    data: 'USERLIST',
    userList: userList.data,
  }
}

export const countPlusAction = () => ({ // 액션 생성 함수
  type: COUNT_PLUS
})

export const countMinusAction = () => ({
  type: COUNT_MINUS
})

export const userListAction = () => {
  return async function (dispatch, getState) {
    const result = await axios.get(`http://localhost:8000/UserList`)
    dispatch({type:GET_USER_LIST, payload:result.data})
  }
  // try{
  //   const result = await axios.get(`http://jsonplaceholder.typicode.com/users`)
  //   return{
  //     type:GET_USER_LIST,
  //     payload:result.data,
  //   }
  //
  // } catch (e) {
  //   return{
  //     payload: console.log(e),
  //   }
  // }
}

const reducer = (state = initialState, action) => { // 리듀서
  switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
    case COUNT_PLUS:
      const testData = 'PLUS!'
      return {
        ...state,
        number: state.number + 1,
        data: testData,
        userList: [],
      }
    case COUNT_MINUS:
      const testData2 = 'MINUS!'
      return {
        ...state,
        number: state.number - 1,
        data: testData2,
        userList: [],
      }
    case GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      }
    default:
      return state
  }
}

export default reducer

/* https://medium.com/how-to-react/how-to-use-redux-in-your-react-app-with-axios-2327f581bf8a */