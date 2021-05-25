import React, { useEffect, useState } from 'react'
import { CloudTable, ComponentBox } from '../components'

const axios = require('axios')

const CloudTableContainer = props => {

  const [rawList, setRawList] = useState([])
  const [colList, setColList] = useState([])

  const dataURL = props.dataURL
  const width = props.width

  const getData = async () => {
    try {
      const result = await axios.get(dataURL)
      setRawList(result.data['rawList'])
      setColList(result.data['colList'])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ComponentBox width={width}>
      <CloudTable
        colList={colList}
        rawList={rawList}
      ></CloudTable>
    </ComponentBox>
  )
}
export default CloudTableContainer