import React, { useEffect, useState } from 'react'
import { BoxHeader, CloudTable } from '../components'

const axios = require('axios')

const CloudTableContainer = props => {

  const [dataList, setDataList] = useState([])
  const [headerList, setHeaderList] = useState([])

  const headerDataURL = props.headerDataURL
  const listDataURL = props.listDataURL

  const getData = async () => {
    try {
      const headResult = await axios.get(headerDataURL)
      const dataResult = await axios.get(listDataURL)
      setHeaderList(headResult.data)
      setDataList(dataResult.data)
    } catch (e) {
      console.log(e + ' (CloudTableContainer.js Error!) ')
    }
  }

  const getTableHeader = data => {
    const result = []
    data.forEach(item => {
      result.push(item['label'])
    })
    return result
  }

  const getTableData = data => {
    const result = []
    data.forEach(item => {
      const row = []
      headerList.forEach(name => {
        row.push(item[name['value']])
      })
      result.push(row)
    })
    return result
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <BoxHeader></BoxHeader>
      <CloudTable
        headerList={getTableHeader(headerList)}
        dataList={getTableData(dataList)}
      ></CloudTable>
    </>
  )
}
export default CloudTableContainer