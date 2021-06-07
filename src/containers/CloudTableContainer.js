import React, { useEffect, useState, useMemo } from 'react'
import { BoxHeader, CloudTable } from '../components'
import { useSelector } from 'react-redux'

const axios = require('axios')

const CloudTableContainer = props => {
  const memberId = useSelector(state => state.user.memberId)

  const [dataList, setDataList] = useState([])
  const [headerList, setHeaderList] = useState([])

  const headerDataURL = props.headerDataURL
  const listDataURL = props.listDataURL

  const getData = async (apiKey) => {
    try {
      const headResult = await axios.get(headerDataURL)
      const dataResult = await axios.get(listDataURL + `${apiKey}`)
      setHeaderList(headResult.data)
      setDataList(dataResult.data)
    } catch (e) {
      console.log(e + ' (CloudTableContainer.js Error!) ')
    }
  }

  useEffect(() => {
    getData(memberId)
  }, [memberId])

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
export default CloudTableContainer