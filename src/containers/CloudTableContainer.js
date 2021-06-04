import React, { useEffect, useState } from 'react'
import { BoxHeader, CloudTable } from '../components'
import { useSelector } from 'react-redux'

const axios = require('axios')

const CloudTableContainer = props => {
  const urlKey = useSelector(state => state.user.urlKey)

  const [dataList, setDataList] = useState([])
  const [headerList, setHeaderList] = useState([])

  const headerDataURL = props.headerDataURL
  const listDataURL = props.listDataURL

  const getData = async (apiKey) => {
    try {
      const headResult = await axios.get(headerDataURL)
      const dataResult = await axios.get(listDataURL + `${apiKey}`)
      console.log(headResult.data)
      console.log(dataResult.data)
      setHeaderList(headResult.data)
      setDataList(dataResult.data)
    } catch (e) {
      console.log(e + ' (CloudTableContainer.js Error!) ')
    }
  }

  // const getTableHeader = data => {
  //   const result = []
  //   data.forEach(item => {
  //     result.push(item['label'])
  //   })
  //   return result
  // }
  //
  // const getTableData = data => {
  //   const result = []
  //   data.forEach(item => {
  //     const row = []
  //     headerList.forEach(name => {row.push(item[name['value']])})
  //     result.push(row)
  //   })
  //   return result
  // }

  useEffect(() => {
    getData(urlKey)
  }, [urlKey])
  useEffect(() => {
    getData(urlKey)
  }, [])

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