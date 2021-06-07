import React, { useEffect, useState } from 'react'
import { Selector } from '../components'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../reducers/user'

/**
 * props
 * - dataURL : api dataURL
 */

const SelectorContainer = props => {
  /* -- redux --- */
  const dispatch = useDispatch()
  const userList = useSelector(state => state.user.userList)
  /* -- redux --- */

  const [data, setData] = useState(null)
  const [userData, setUserData] = useState(null)

  const initialize = async (dataURL) => {
    try {
      const response = await axios.get(dataURL)
      setData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    initialize(props.dataURL)
  }, [])

  /* -- redux --- */
  useEffect(() => {
    dispatch(userListAction())
  }, [dispatch])
  useEffect(() => {
    setUserData(userList)
  }, [userList])
  /* -- redux --- */

  // if (!data) return null
  if(!userData) return null
  return (
    <>
      <Selector options={userData}></Selector>
    </>
  )
}
export default SelectorContainer