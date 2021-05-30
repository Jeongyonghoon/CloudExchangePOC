import React, { useEffect, useState } from 'react'
import { BoxHeader, CloudTable } from '../components'

const axios = require('axios')

const CloudTableContainer = props => {

  const [rawList, setRawList] = useState([])
  const [colList, setColList] = useState([])

  const dataURL = props.dataURL
  const width = props.width

  /* ----------- default ----------- */
  const defaultColTable = () => {
    return {
      dataA: 'defaultA',
      dataB: 'defaultB',
      dataC: 'defaultC',
    }
  }

  const defaultRawTable = () => {
    return [
      {
        dataA: 100,
        dataB: 200,
        dataC: 300,
      },
      {
        dataA: 100,
        dataB: 200,
        dataC: 300,
      },
      {
        dataA: 100,
        dataB: 200,
        dataC: 300,
      }
    ]
  }
  /* ----------- default ----------- */

  const getData = async () => {
    try {
      const result = await axios.get(dataURL)
      setRawList(result.data['rawList'])
      setColList(result.data['colList'])
    } catch (e) {
      setRawList(defaultRawTable())
      setColList(defaultColTable())
      console.log(e)
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