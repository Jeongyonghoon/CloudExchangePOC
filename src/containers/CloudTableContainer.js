import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BoxHeader, CloudTable } from '../components'
import { useSelector } from 'react-redux'

const axios = require('axios')

const CloudTableContainer = props => {
  const memberId = useSelector(state => state.user.memberId) //기본 값
  const yearMonth = useSelector(state => state.yearMonth[props.bindParam])

  const [dataList, setDataList] = useState([])
  const [headerList, setHeaderList] = useState([])

  const headerDataURL = props.headerDataURL
  const listDataURL = props.listDataURL

  const getData = async (dataURL) => {
    try {
      const headResult = await axios.get(headerDataURL)
      const dataResult = await axios.get(dataURL)
      console.log(dataURL , ' urlcheck')

      setHeaderList(headResult.data)
      setDataList(dataResult.data)
    } catch (e) {
      console.log(e + ' (CloudTableContainer.js Error!) ')
    }
  }
  useEffect(() => {
        switch(props.bindParam){
          case('yearMonth'):
            getData(listDataURL + memberId + '&yearMonth=' + yearMonth)
          default:
            getData(listDataURL + memberId)
    }
  }, [memberId, yearMonth])

  return (
    <>
      <BoxHeader title={props.title}></BoxHeader>
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