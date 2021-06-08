import React, { useEffect, useState } from 'react'
import { Selector } from '../components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userKeyAction } from '../reducers/user'

/**
 * props
 * - dataURL : api dataURL
 */

const SelectorContainer = props => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState([])

  const initialize = async (dataURL) => {
    try {
      const response = await axios.get(dataURL)
      setUserData(response.data.data)
      dispatch(userKeyAction(response.data.data[0].memberId)) // --> 초기 멤버 아이디 설정
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    initialize(props.dataURL)
  }, [])

  if(!userData) return null
  return (
    <>
      <Selector options={userData}></Selector>
    </>
  )
}
export default SelectorContainer