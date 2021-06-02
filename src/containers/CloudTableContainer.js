import React, { useEffect, useState } from 'react'
import { BoxHeader, CloudTable } from '../components'

const axios = require('axios')

const CloudTableContainer = props => {

  const [rawList, setRawList] = useState([])
  const [colList, setColList] = useState([])

  const dataURL = props.dataURL
  const width = props.width


  const getData = async () => {
    try {
      const result = (await axios.get(dataURL))
      console.log(result.data + 'check')
      setRawList(result.data['rawList'])
      setColList(result.data['colList'])
    } catch (e) {
      console.log(e + 'check')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <BoxHeader></BoxHeader>
      <CloudTable
        colList={colList}
        rawList={rawList}
      ></CloudTable>
    </>
  )
}
export default CloudTableContainer