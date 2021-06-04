import React, { useEffect, useState } from 'react'
import { YearMonthSelector } from '../components'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'

/**
 * props
 * - dataURL : api dataURL
 */

const YearMonthSelectorContainer = props => {

  // userkey가 default일 경우

  // yearmonth reducers 생성 > yearmonth state가지고 있음(초기값 필요) >> 

  // # useeffect
  // userKey 가지고옴 >> useSelector로
  // api 요청 >> userKey에 맞는 yearMonths 가져옴 >> Selector에서 사용할 수 있게 파싱
  // Selector에 전달
  // Selector에서는 value에 따라서 set yearmonth

  // chart container에서는 yearmonth를 보고있고 바뀔 때 마다 api 요청
  // data를 chart component에서 사용할 수 있게 파실

  // const [data, setData] = useState(null)
  const [yearMonths, setYearMonths] = useState(null)
  /* -- redux --- */
  const dispatch = useDispatch()
  const accountId = useSelector(state => state.user.userKey) // userKey accountId로 바꾸기
  /* -- redux --- */

  const initialize = async (dataURL) => {
    try {
      const response = await axios.get(dataURL)
      console.log(response.data);
      setYearMonths(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  // accountId 사용하여 api request
  useEffect(() => {
    // initialize(props.dataURL)
    // initialize('/cloud/billings/detail/yearmonth?accountId=' + 162371205491) //실제 url
    initialize('/static/data/detail/yearmonth.json')
  }, [])

  // /* -- redux --- */
  // useEffect(() => {
  //   dispatch(userListAction())
  // }, [dispatch])
  // useEffect(() => {
  //   setUserData(userList)
  // }, [userList])
  // /* -- redux --- */

  return (
    <>
      <YearMonthSelector options={yearMonths}></YearMonthSelector>
    </>
  )
}
export default YearMonthSelectorContainer