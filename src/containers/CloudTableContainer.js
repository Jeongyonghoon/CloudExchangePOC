import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { BoxHeader, CloudTable } from '../components'
import { useSelector } from 'react-redux'

const axios = require('axios')

const CloudTableContainer = props => {
  const memberId = useSelector(state => state.user.memberId) //기본 값
  const yearMonth = useSelector(state => state.yearMonth[props.bindProp])

  const [dataList, setDataList] = useState([])
  const [headerList, setHeaderList] = useState([])

  const headerDataURL = props.headerDataURL
  const listDataURL = props.listDataURL
  const bindProp = props.bindProp

  const getData = async (memberId, yearMonth) => {
    try {
      const headResult = await axios.get(headerDataURL)
      let dataResult

      if(yearMonth==undefined)
        dataResult = await axios.get(listDataURL + `${memberId}`)
      else if(bindProp=='yearMonth')
        dataResult = await axios.get(listDataURL + `${memberId}` + '&year_month=' + `${yearMonth}`)

      setHeaderList(headResult.data)
      setDataList(dataResult.data)
    } catch (e) {
      console.log(e + ' (CloudTableContainer.js Error!) ')
    }
  }

  useEffect(() => {
    getData(memberId, yearMonth)
    console.log(yearMonth + ' check')
  }, [memberId, yearMonth])

  return (
    <>
      <BoxHeader></BoxHeader>
      <CloudTable
        headerList={headerList}
        dataList={dataList}
      ></CloudTable>
    </>
  )
}

CloudTableContainer.propTypes = {
  headerDataURL: PropTypes.string,
  listDataURL: PropTypes.string
}

CloudTableContainer.defaultProps = {
  headerDataURL: '',
  listDataURL: ''
}

export default CloudTableContainer

/*
현재 useEffect는 두 reducer를 직접 바라보고 있기때문에 하나만 변동되어도 해당 url이 필요없는 컴포넌트도 리렌더링 된다.
하지만 props로 바라보지 못하게 하고 state를 관리해준다면 그러지 않는다.
*/